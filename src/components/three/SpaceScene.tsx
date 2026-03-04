'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface SpaceSceneProps {
  className?: string;
  disableScrollAnimation?: boolean;
  rotationSpeedMultiplier?: number;
}

export default function SpaceScene({ 
  className = '', 
  disableScrollAnimation = false,
  rotationSpeedMultiplier = 1 
}: SpaceSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const starsRef = useRef<THREE.Points | null>(null);
  const nebulasRef = useRef<THREE.Points[]>([]);
  const [isDark, setIsDark] = useState(true);

  // Theme detection
  useEffect(() => {
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    // Initial check
    checkTheme();

    // Watch for theme changes
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
    const isMobile = width < 768;

    // Scene setup
    const scene = new THREE.Scene();
    const bgColor = isDark ? 0x000000 : 0x0a0e1a;
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.Fog(bgColor, 10, 400);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.2 : 0.4);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(isDark ? 0x3b82f6 : 0x2563eb, isDark ? 2 : 1.5, 300);
    blueLight.position.set(-50, 50, -100);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(isDark ? 0xa855f7 : 0x7c3aed, isDark ? 2 : 1.5, 300);
    purpleLight.position.set(50, -50, -150);
    scene.add(purpleLight);

    // Create star field
    const starCount = isMobile ? 1000 : 2500;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      // Distribute stars in a large sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 100 + Math.random() * 300;

      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = -radius * Math.cos(phi) - 50; // Shift back

      // Star colors - theme aware
      if (isDark) {
        // Dark mode: white to cyan stars
        const colorMix = Math.random();
        starColors[i * 3] = 0.8 + colorMix * 0.2;
        starColors[i * 3 + 1] = 0.8 + colorMix * 0.2;
        starColors[i * 3 + 2] = 1;
      } else {
        // Light mode: darker blues and purples
        const colorChoice = Math.random();
        if (colorChoice > 0.7) {
          // Purple stars
          starColors[i * 3] = 0.5 + Math.random() * 0.3;
          starColors[i * 3 + 1] = 0.3 + Math.random() * 0.2;
          starColors[i * 3 + 2] = 0.7 + Math.random() * 0.3;
        } else {
          // Blue stars
          starColors[i * 3] = 0.2 + Math.random() * 0.3;
          starColors[i * 3 + 1] = 0.3 + Math.random() * 0.4;
          starColors[i * 3 + 2] = 0.6 + Math.random() * 0.4;
        }
      }

      // Star sizes
      starSizes[i] = Math.random() * 2 + 0.5;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));

    const starMaterial = new THREE.PointsMaterial({
      size: isMobile ? 1.5 : 2,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.8 : 0.6,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    starsRef.current = stars;

    // Create nebula clouds (only on desktop for performance)
    if (!isMobile) {
      const nebulaConfigs = isDark 
        ? [
            { count: 800, position: [-80, 30, -200], color: 0xa855f7, spread: 40 },
            { count: 1000, position: [70, -40, -280], color: 0x3b82f6, spread: 50 },
            { count: 600, position: [0, 60, -350], color: 0x6366f1, spread: 35 },
          ]
        : [
            { count: 800, position: [-80, 30, -200], color: 0xc4b5fd, spread: 40 },
            { count: 1000, position: [70, -40, -280], color: 0x93c5fd, spread: 50 },
            { count: 600, position: [0, 60, -350], color: 0xa5b4fc, spread: 35 },
          ];

      nebulaConfigs.forEach((config) => {
        const nebulaGeometry = new THREE.BufferGeometry();
        const nebulaPositions = new Float32Array(config.count * 3);
        const nebulaSizes = new Float32Array(config.count);

        for (let i = 0; i < config.count; i++) {
          nebulaPositions[i * 3] = config.position[0] + (Math.random() - 0.5) * config.spread;
          nebulaPositions[i * 3 + 1] = config.position[1] + (Math.random() - 0.5) * config.spread;
          nebulaPositions[i * 3 + 2] = config.position[2] + (Math.random() - 0.5) * config.spread;
          nebulaSizes[i] = Math.random() * 4 + 2;
        }

        nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
        nebulaGeometry.setAttribute('size', new THREE.BufferAttribute(nebulaSizes, 1));

        const nebulaMaterial = new THREE.PointsMaterial({
          size: 5,
          color: config.color,
          transparent: true,
          opacity: isDark ? 0.4 : 0.3,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true,
        });

        const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
        nebula.userData = { baseScale: 1, pulseSpeed: 0.0015 }; // Fixed pulse speed for consistency
        scene.add(nebula);
        nebulasRef.current.push(nebula);
      });
    }

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    // Scroll handler - Full page scroll tracking
    const handleScroll = () => {
      // Calculate scroll progress for entire page (0 to 1)
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight > 0) {
        scrollRef.current = Math.min(scrollTop / docHeight, 1);
      } else {
        scrollRef.current = 0;
      }
    };

    // Resize handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return;

      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    container.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Call once to initialize
    handleScroll();

    // Animation loop
    let time = 0;
    let lastTime = performance.now();
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      
      // Delta time for smooth, frame-rate independent animations
      const currentTime = performance.now();
      const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
      lastTime = currentTime;
      time += deltaTime;

      // Twinkle stars - smoother animation
      if (starsRef.current) {
        const sizes = starsRef.current.geometry.attributes.size.array as Float32Array;
        for (let i = 0; i < sizes.length; i++) {
          const baseSize = 0.5 + (i % 3) * 0.5;
          sizes[i] = baseSize + Math.sin(time * 1.5 + i * 0.05) * 0.2;
        }
        starsRef.current.geometry.attributes.size.needsUpdate = true;
      }

      // Pulse nebulas - consistent smooth pulsing
      nebulasRef.current.forEach((nebula) => {
        const scale = 1 + Math.sin(time * nebula.userData.pulseSpeed) * 0.12;
        nebula.scale.setScalar(scale);
        nebula.rotation.z += 0.0002 * deltaTime * 60 * rotationSpeedMultiplier;
      });

      // Camera movement based on scroll - Enhanced for full page journey
      if (!disableScrollAnimation) {
        const targetZ = scrollRef.current * -400; // Move forward up to 400 units for dramatic effect
        const targetY = scrollRef.current * 50; // Move up more significantly
        const targetX = Math.sin(scrollRef.current * Math.PI * 0.5) * 30; // Gentle horizontal drift
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
      }

      // Mouse parallax (subtle)
      camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouseRef.current.x * 0.02, 0.05);
      camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, mouseRef.current.y * 0.02, 0.05);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      // Dispose geometries
      if (starsRef.current) {
        starsRef.current.geometry.dispose();
        (starsRef.current.material as THREE.Material).dispose();
      }

      nebulasRef.current.forEach((nebula) => {
        nebula.geometry.dispose();
        (nebula.material as THREE.Material).dispose();
      });

      // Dispose renderer
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
      }

      // Clear refs
      nebulasRef.current = [];
      starsRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
    };
  }, [isDark, disableScrollAnimation, rotationSpeedMultiplier]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 -z-10 ${className}`}
      style={{ cursor: 'default' }}
    />
  );
}
