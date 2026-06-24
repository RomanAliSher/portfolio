import { Canvas, useFrame } from '@react-three/fiber';
import { Image, Environment, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedPortrait() {
  const imageRef = useRef(null);

  useFrame((state) => {
    if (!imageRef.current) return;
    const { x, y } = state.pointer;
    imageRef.current.rotation.y = THREE.MathUtils.lerp(imageRef.current.rotation.y, (x * Math.PI) / 10, 0.05);
    imageRef.current.rotation.x = THREE.MathUtils.lerp(imageRef.current.rotation.x, (-y * Math.PI) / 20, 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <Image 
        ref={imageRef} 
        url="/portrait.png" 
        transparent 
        scale={[4, 5]} 
        position={[0, -0.5, 0]} 
      />
    </Float>
  );
}

function AmbientBlobs() {
  return (
    <>
      <pointLight color="#5E6AD2" position={[-2, 2, -2]} intensity={20} distance={10} />
      <pointLight color="#8A8F98" position={[2, -1, 1]} intensity={10} distance={10} />
      <Float speed={1.5} floatIntensity={2}>
        <mesh position={[-3, 2, -4]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshBasicMaterial color="#5E6AD2" transparent opacity={0.15} />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 h-screen w-full bg-gradient-radial-base pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Environment preset="city" />
        <AmbientBlobs />
        <AnimatedPortrait />
      </Canvas>
    </div>
  );
}