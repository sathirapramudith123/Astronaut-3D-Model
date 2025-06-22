import { useState } from 'react'
import './index.css';
import Astronaut from './components/Astronaut';

export default function App() {
  return (
    <div className="w-full h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold p-6">🚀 Astronaut 3D Model</h1>
      <Astronaut />
    </div>
  );
}




