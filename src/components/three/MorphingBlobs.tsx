"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { blobVertexShader } from "./shaders/blobVertex.glsl";

interface MorphingBlobsProps {
  className?: string;
}

interface BlobConfig {
  mesh: THREE.Mesh;
  material: THREE.ShaderMaterial;
  basePosition: THREE.Vector3;
  driftSpeed: number;
  driftRadius: number;
  rotationSpeed: THREE.Vector3;
  scalePhase: number;
  noiseOffset: THREE.Vector3;
}

export default function MorphingBlobs({ className = "" }: MorphingBlobsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const blobsRef = useRef<BlobConfig[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);
  const lastFPSCheckRef = useRef<number>(0);
  const qualityRef = useRef<number>(1);
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

    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 40;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting - theme aware
    const ambientLight = new THREE.AmbientLight(0x404040, isDark ? 1.5 : 2);
    scene.add(ambientLight);

    const blueLightColor = isDark ? 0x3b82f6 : 0x60a5fa;
    const blueLight = new THREE.PointLight(blueLightColor, isDark ? 2 : 1.5, 80);
    blueLight.position.set(20, 20, 20);
    scene.add(blueLight);

    const purpleLightColor = isDark ? 0xa855f7 : 0xa78bfa;
    const purpleLight = new THREE.PointLight(purpleLightColor, isDark ? 2 : 1.5, 80);
    purpleLight.position.set(-20, -20, 20);
    scene.add(purpleLight);

    // Blob count based on device
    let blobCount: number;
    let subdivisions: [number, number];

    if (isMobile) {
      blobCount = 3;
      subdivisions = [2, 2];
    } else if (isTablet) {
      blobCount = 4;
      subdivisions = [3, 3];
    } else {
      blobCount = 5;
      subdivisions = [4, 4];
    }

    // Color palette - theme aware
    const colorPairs = isDark
      ? [
          { color1: new THREE.Color(0x3b82f6), color2: new THREE.Color(0x6366f1) },
          { color1: new THREE.Color(0x6366f1), color2: new THREE.Color(0xa855f7) },
          { color1: new THREE.Color(0xa855f7), color2: new THREE.Color(0x3b82f6) },
          { color1: new THREE.Color(0x3b82f6), color2: new THREE.Color(0xa855f7) },
          { color1: new THREE.Color(0x6366f1), color2: new THREE.Color(0x3b82f6) },
        ]
      : [
          { color1: new THREE.Color(0x60a5fa), color2: new THREE.Color(0x818cf8) },
          { color1: new THREE.Color(0x818cf8), color2: new THREE.Color(0xa78bfa) },
          { color1: new THREE.Color(0xa78bfa), color2: new THREE.Color(0x60a5fa) },
          { color1: new THREE.Color(0x60a5fa), color2: new THREE.Color(0xa78bfa) },
          { color1: new THREE.Color(0x818cf8), color2: new THREE.Color(0x60a5fa) },
        ];

    const blobs: BlobConfig[] = [];

    for (let i = 0; i < blobCount; i++) {
      const geometry = new THREE.IcosahedronGeometry(1, subdivisions[0]);

      const material = new THREE.ShaderMaterial({
        vertexShader: blobVertexShader,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec3 vNormal;
          varying vec3 vPosition;

          void main() {
            float mixFactor = (vPosition.y + 1.0) * 0.5;
            vec3 color = mix(color1, color2, mixFactor);

            vec3 viewDirection = normalize(cameraPosition - vPosition);
            float fresnel = pow(1.0 - abs(dot(viewDirection, vNormal)), 2.0);

            gl_FragColor = vec4(color + fresnel * 0.3, 0.2);
          }
        `,
        uniforms: {
          time: { value: 0.0 },
          noiseScale: { value: 0.5 + i * 0.1 },
          displacementAmount: { value: 0.8 },
          color1: { value: colorPairs[i % colorPairs.length].color1 },
          color2: { value: colorPairs[i % colorPairs.length].color2 },
          cameraPosition: { value: camera.position },
        },
        transparent: true,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });

      const mesh = new THREE.Mesh(geometry, material);

      const angle = (i / blobCount) * Math.PI * 2;
      const radius = 15 + Math.random() * 10;
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        -10 - i * 5
      );

      const scale = 8 + (blobCount - i) * 2;
      mesh.scale.setScalar(scale);

      scene.add(mesh);

      blobs.push({
        mesh,
        material,
        basePosition: mesh.position.clone(),
        driftSpeed: 0.0003 + Math.random() * 0.0002,
        driftRadius: 5 + Math.random() * 3,
        rotationSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.001,
          (Math.random() - 0.5) * 0.001,
          (Math.random() - 0.5) * 0.0005
        ),
        scalePhase: Math.random() * Math.PI * 2,
        noiseOffset: new THREE.Vector3(
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ),
      });
    }

    blobsRef.current = blobs;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / height) * 2 + 1;
    };

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    container.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);

      timeRef.current += 0.01;
      frameCountRef.current++;

      if (frameCountRef.current % 60 === 0) {
        const now = performance.now();
        if (lastFPSCheckRef.current > 0) {
          const deltaTime = now - lastFPSCheckRef.current;
          const fps = (60 / deltaTime) * 1000;

          if (fps < 50 && qualityRef.current > 0.25) {
            qualityRef.current *= 0.5;

            if (qualityRef.current <= 0.5 && blobs.length > 2) {
              const removedBlob = blobs.pop();
              if (removedBlob) {
                scene.remove(removedBlob.mesh);
                removedBlob.mesh.geometry.dispose();
                removedBlob.material.dispose();
              }
            }
          }
        }
        lastFPSCheckRef.current = now;
      }

      blobs.forEach((blob, index) => {
        blob.material.uniforms.time.value = timeRef.current + blob.noiseOffset.x;

        const driftTime = timeRef.current * blob.driftSpeed;
        blob.mesh.position.x =
          blob.basePosition.x + Math.sin(driftTime) * blob.driftRadius;
        blob.mesh.position.y =
          blob.basePosition.y + Math.cos(driftTime * 0.7) * blob.driftRadius;
        blob.mesh.position.z =
          blob.basePosition.z + Math.sin(driftTime * 0.5) * (blob.driftRadius * 0.5);

        blob.mesh.rotation.x += blob.rotationSpeed.x;
        blob.mesh.rotation.y += blob.rotationSpeed.y;
        blob.mesh.rotation.z += blob.rotationSpeed.z;

        const scaleTime = timeRef.current * 0.0005 + blob.scalePhase;
        const scaleFactor = 1.0 + Math.sin(scaleTime) * 0.1;
        const baseScale = 8 + (blobCount - index) * 2;
        blob.mesh.scale.setScalar(baseScale * scaleFactor);

        const mouseWorldPos = new THREE.Vector3(
          mouseRef.current.x * 30,
          mouseRef.current.y * 30,
          blob.mesh.position.z
        );
        const distance = blob.mesh.position.distanceTo(mouseWorldPos);

        if (distance < 30) {
          const direction = new THREE.Vector3()
            .subVectors(blob.mesh.position, mouseWorldPos)
            .normalize();
          blob.mesh.position.x += direction.x * 0.015;
          blob.mesh.position.y += direction.y * 0.015;
        }
      });

      camera.rotation.x = mouseRef.current.y * 0.02;
      camera.rotation.y = mouseRef.current.x * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      blobs.forEach((blob) => {
        blob.mesh.geometry.dispose();
        blob.material.dispose();
        scene.remove(blob.mesh);
      });

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
