'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SpaceSceneProps {
  className?: string;
}

export default function SpaceScene({ className = '' }: SpaceSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const planetsRef = useRef<THREE.Mesh[]>([]);
  const starsRef = useRef<THREE.Points | null>(null);
  const nebulasRef = useRef<THREE.Points[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const isMobile = width < 768;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 10, 400);
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 2, 300);
    blueLight.position.set(-50, 50, -100);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 2, 300);
    purpleLight.position.set(50, -50, -150);
    scene.add(purpleLight);

    // Create planets
    const planetConfigs = [
      { radius: isMobile ? 8 : 12, position: [-30, 15, -120] as [number, number, number], color: 0x3b82f6, emissive: 0x1e40af, rotationSpeed: 0.001 },
      { radius: isMobile ? 6 : 9, position: [40, -20, -180] as [number, number, number], color: 0x6366f1, emissive: 0x4338ca, rotationSpeed: 0.0015 },
      { radius: isMobile ? 10 : 15, position: [-50, -30, -250] as [number, number, number], color: 0xa855f7, emissive: 0x7c3aed, rotationSpeed: 0.0008 },
    ];

    if (!isMobile) {
      planetConfigs.push(
        { radius: 7, position: [60, 40, -200] as [number, number, number], color: 0x06b6d4, emissive: 0x0891b2, rotationSpeed: 0.0012 },
        { radius: 11, position: [20, -50, -300] as [number, number, number], color: 0x8b5cf6, emissive: 0x6d28d9, rotationSpeed: 0.001 }
      );
    }

    planetConfigs.forEach((config) => {
      const geometry = new THREE.SphereGeometry(config.radius, isMobile ? 24 : 32, isMobile ? 16 : 24);
      const material = new THREE.MeshStandardMaterial({
        color: config.color,
        emissive: config.emissive,
        emissiveIntensity: 0.3,
        roughness: 0.7,
        metalness: 0.3,
      });
      const planet = new THREE.Mesh(geometry, material);
      planet.position.set(...config.position);
      planet.userData = { 
        rotationSpeed: config.rotationSpeed,
        orbitRadius: Math.sqrt(config.position[0] ** 2 + config.position[1] ** 2) * 0.1,
        orbitSpeed: config.rotationSpeed * 0.3,
        orbitOffset: Math.random() * Math.PI * 2,
      };
      scene.add(planet);
      planetsRef.current.push(planet);
    });

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

      // Star colors (white to cyan)
      const colorMix = Math.random();
      starColors[i * 3] = 0.8 + colorMix * 0.2;
      starColors[i * 3 + 1] = 0.8 + colorMix * 0.2;
      starColors[i * 3 + 2] = 1;

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
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    starsRef.current = stars;

    // Create nebula clouds (only on desktop for performance)
    if (!isMobile) {
      const nebulaConfigs = [
        { count: 800, position: [-80, 30, -200], color: 0xa855f7, spread: 40 },
        { count: 1000, position: [70, -40, -280], color: 0x3b82f6, spread: 50 },
        { count: 600, position: [0, 60, -350], color: 0x6366f1, spread: 35 },
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
          opacity: 0.4,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true,
        });

        const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
        nebula.userData = { baseScale: 1, pulseSpeed: 0.001 + Math.random() * 0.001 };
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

    // Scroll handler
    const handleScroll = () => {
      const heroSection = document.querySelector('main > section:first-child');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroHeight = heroRect.height;
        const visibleHeight = Math.min(heroRect.bottom, window.innerHeight) - Math.max(heroRect.top, 0);
        
        // Calculate scroll progress within hero section
        if (heroRect.top <= 0) {
          scrollRef.current = Math.min(Math.abs(heroRect.top) / heroHeight, 1);
        } else {
          scrollRef.current = 0;
        }
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
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Animate planets
      planetsRef.current.forEach((planet, index) => {
        // Rotation
        planet.rotation.y += planet.userData.rotationSpeed;
        planet.rotation.x += planet.userData.rotationSpeed * 0.5;

        // Subtle orbital movement
        const orbitTime = time * planet.userData.orbitSpeed + planet.userData.orbitOffset;
        const baseX = planet.position.x;
        const baseY = planet.position.y;
        planet.position.x = baseX + Math.cos(orbitTime) * planet.userData.orbitRadius;
        planet.position.y = baseY + Math.sin(orbitTime) * planet.userData.orbitRadius;
      });

      // Twinkle stars
      if (starsRef.current) {
        const sizes = starsRef.current.geometry.attributes.size.array as Float32Array;
        for (let i = 0; i < sizes.length; i++) {
          const baseSize = 0.5 + (i % 3) * 0.5;
          sizes[i] = baseSize + Math.sin(time * 2 + i * 0.1) * 0.3;
        }
        starsRef.current.geometry.attributes.size.needsUpdate = true;
      }

      // Pulse nebulas
      nebulasRef.current.forEach((nebula) => {
        const scale = 1 + Math.sin(time * nebula.userData.pulseSpeed * 100) * 0.15;
        nebula.scale.setScalar(scale);
        nebula.rotation.z += 0.0002;
      });

      // Camera movement based on scroll
      const targetZ = scrollRef.current * -150; // Move forward up to 150 units
      const targetY = scrollRef.current * 20; // Move up slightly
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);

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
      planetsRef.current.forEach((planet) => {
        planet.geometry.dispose();
        (planet.material as THREE.Material).dispose();
      });

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
      planetsRef.current = [];
      nebulasRef.current = [];
      starsRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 -z-10 ${className}`}
      style={{ cursor: 'default' }}
    />
  );
}
