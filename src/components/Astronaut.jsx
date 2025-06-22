// src/components/Astronaut.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, Plane } from '@react-three/drei';
import { Suspense } from 'react';

function AstronautModel() {
  const { scene } = useGLTF('/models/little_mrastronaut.glb');
  return (
    <primitive object={scene} scale={8} position={[0, -1.5, 0]} rotation={[0, Math.PI, 0]} />
  );
}
useGLTF.preload('/models/little_mrastronaut.glb');

export default function Astronaut() {
  return (
    <Canvas className="w-full h-screen bg-black" camera={{ position: [0, 1.5, 6], fov: 50 }}>
      {/* Lights */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />

      {/* Suspense + model */}
      <Suspense fallback={<Html center><p className="text-white">Loading...</p></Html>}>
        <AstronautModel />

        {/* Floor plane */}
        <Plane
          args={[30, 30]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3, 0]}
          receiveShadow
        >
          <meshStandardMaterial color="#222" />
        </Plane>
      </Suspense>

      {/* Orbit controls */}
      <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}
