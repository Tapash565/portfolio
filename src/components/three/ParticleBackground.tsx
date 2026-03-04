"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ParticleBackgroundProps {
  className?: string;
}

export default function ParticleBackground({ className = "" }: ParticleBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const linesRef = useRef<THREE.LineSegments | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [isDark, setIsDark] = useState(true);

  // Theme detection
  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particle count based on screen size
    const isMobile = width < 768;
    const particleCount = isMobile ? 50 : 100;

    // Colors - theme aware
    const particleColor = isDark ? 0x3b82f6 : 0x2563eb;
    const lineColor = isDark ? 0x6366f1 : 0x4f46e5;
    const particleOpacity = isDark ? 0.8 : 0.6;
    const lineOpacity = isDark ? 0.15 : 0.1;

    // Create particles
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.01,
      });
    }

    // Particle geometry and material
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.5,
      transparent: true,
      opacity: particleOpacity,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Create connection lines geometry
    const linesGeometry = new THREE.BufferGeometry();
    const linesMaterial = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: lineOpacity,
    });
    const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lines);
    linesRef.current = lines;

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / height) * 2 + 1;
    };

    // Resize handler
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Animation loop
    const maxDistance = 25;
    const linePositions = new Float32Array(particleCount * particleCount * 6);

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);

      const positionsArray = geometry.attributes.position.array as Float32Array;

      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;

        // Apply velocity
        positionsArray[i3] += velocities[i].x;
        positionsArray[i3 + 1] += velocities[i].y;
        positionsArray[i3 + 2] += velocities[i].z;

        // Mouse interaction - particles move slightly towards mouse
        const mouseInfluence = 0.0005;
        positionsArray[i3] += mouseRef.current.x * mouseInfluence * 50;
        positionsArray[i3 + 1] += mouseRef.current.y * mouseInfluence * 50;

        // Boundary check - wrap around
        if (positionsArray[i3] > 50) positionsArray[i3] = -50;
        if (positionsArray[i3] < -50) positionsArray[i3] = 50;
        if (positionsArray[i3 + 1] > 50) positionsArray[i3 + 1] = -50;
        if (positionsArray[i3 + 1] < -50) positionsArray[i3 + 1] = 50;
        if (positionsArray[i3 + 2] > 25) positionsArray[i3 + 2] = -25;
        if (positionsArray[i3 + 2] < -25) positionsArray[i3 + 2] = 25;
      }

      geometry.attributes.position.needsUpdate = true;

      // Update connections
      let lineIndex = 0;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = positionsArray[i * 3] - positionsArray[j * 3];
          const dy = positionsArray[i * 3 + 1] - positionsArray[j * 3 + 1];
          const dz = positionsArray[i * 3 + 2] - positionsArray[j * 3 + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < maxDistance) {
            const i3 = i * 3;
            const j3 = j * 3;

            linePositions[lineIndex++] = positionsArray[i3];
            linePositions[lineIndex++] = positionsArray[i3 + 1];
            linePositions[lineIndex++] = positionsArray[i3 + 2];
            linePositions[lineIndex++] = positionsArray[j3];
            linePositions[lineIndex++] = positionsArray[j3 + 1];
            linePositions[lineIndex++] = positionsArray[j3 + 2];
          }
        }
      }

      // Update lines geometry
      linesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(linePositions.slice(0, lineIndex), 3)
      );
      linesGeometry.attributes.position.needsUpdate = true;

      // Slowly rotate camera based on mouse
      camera.position.x += (mouseRef.current.x * 5 - camera.position.x) * 0.02;
      camera.position.y += (mouseRef.current.y * 5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      geometry.dispose();
      material.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 -z-10 ${className}`}
      style={{ cursor: "default" }}
    />
  );
}
