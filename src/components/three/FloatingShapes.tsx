"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface FloatingShapesProps {
  className?: string;
}

export default function FloatingShapes({ className = "" }: FloatingShapesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const shapesRef = useRef<THREE.Group | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x3b82f6, 2, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 2, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Create floating shapes
    const shapes = new THREE.Group();
    shapesRef.current = shapes;

    // Materials
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const solidMaterial = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.1,
      shininess: 100,
    });

    // Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(2, 0);
    const ico = new THREE.Mesh(icoGeometry, wireframeMaterial.clone());
    ico.position.set(-8, 5, 0);
    ico.userData = {
      rotationSpeed: { x: 0.005, y: 0.01 },
      floatSpeed: 0.002,
      floatOffset: 0,
    };
    shapes.add(ico);

    const icoSolid = new THREE.Mesh(icoGeometry, solidMaterial);
    icoSolid.position.copy(ico.position);
    icoSolid.userData = { ...ico.userData };
    shapes.add(icoSolid);

    // Torus
    const torusGeometry = new THREE.TorusGeometry(3, 1, 16, 100);
    const torus = new THREE.Mesh(torusGeometry, wireframeMaterial.clone());
    torus.position.set(8, -5, -5);
    torus.userData = {
      rotationSpeed: { x: 0.01, y: 0.005 },
      floatSpeed: 0.003,
      floatOffset: Math.PI,
    };
    shapes.add(torus);

    const torusSolid = new THREE.Mesh(torusGeometry, solidMaterial);
    torusSolid.position.copy(torus.position);
    torusSolid.userData = { ...torus.userData };
    shapes.add(torusSolid);

    // Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(2.5, 0);
    const octa = new THREE.Mesh(octaGeometry, wireframeMaterial.clone());
    octa.position.set(6, 6, -3);
    octa.userData = {
      rotationSpeed: { x: 0.008, y: 0.012 },
      floatSpeed: 0.0015,
      floatOffset: Math.PI / 2,
    };
    shapes.add(octa);

    const octaSolid = new THREE.Mesh(octaGeometry, solidMaterial);
    octaSolid.position.copy(octa.position);
    octaSolid.userData = { ...octa.userData };
    shapes.add(octaSolid);

    // Dodecahedron
    const dodecaGeometry = new THREE.DodecahedronGeometry(2, 0);
    const dodeca = new THREE.Mesh(dodecaGeometry, wireframeMaterial.clone());
    dodeca.position.set(-6, -4, 2);
    dodeca.userData = {
      rotationSpeed: { x: 0.006, y: 0.008 },
      floatSpeed: 0.0025,
      floatOffset: (Math.PI * 3) / 2,
    };
    shapes.add(dodeca);

    const dodecaSolid = new THREE.Mesh(dodecaGeometry, solidMaterial);
    dodecaSolid.position.copy(dodeca.position);
    dodecaSolid.userData = { ...dodeca.userData };
    shapes.add(dodecaSolid);

    scene.add(shapes);

    // Mouse handler
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

    // Animation
    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      shapes.children.forEach((shape) => {
        const mesh = shape as THREE.Mesh;
        const { rotationSpeed, floatSpeed, floatOffset } = mesh.userData;

        // Rotation
        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;

        // Floating motion
        mesh.position.y += Math.sin(time * floatSpeed * 100 + floatOffset) * 0.02;

        // Mouse parallax (only apply to wireframe meshes, solids follow)
        if (mesh.material === wireframeMaterial || (mesh.material as THREE.Material).transparent) {
          const parallaxX = mouseRef.current.x * 2;
          const parallaxY = mouseRef.current.y * 2;
          mesh.position.x += (parallaxX - mesh.position.x) * 0.01;
          mesh.position.y += (parallaxY - mesh.position.y) * 0.01;
        }
      });

      // Rotate entire group slowly
      shapes.rotation.y = Math.sin(time * 0.2) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      shapes.children.forEach((shape) => {
        const mesh = shape as THREE.Mesh;
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });

      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 ${className}`}
      style={{ cursor: "default" }}
    />
  );
}
