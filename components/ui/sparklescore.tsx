"use client";
import React from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

interface SparklesProps {
  particleColor?: string;
}

const Sparkles = ({ particleColor = "#FFFFFF" }: SparklesProps) => {
  const particles = React.useRef<THREE.Points>(null);

  useFrame(() => {
    if (particles.current) {
      particles.current.rotation.x += 0.0005;
      particles.current.rotation.y += 0.001;
    }
  });

  const particleCount = 150;
  const positions = new Float32Array(particleCount * 3);
  const sizes = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    sizes[i] = Math.random() * 0.5 + 0.5;
  }

  return (
    <points ref={particles}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.1}
        color={particleColor}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        alphaTest={0.01}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

interface SparklesCoreProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  className?: string;
}

export const SparklesCore = ({
  id,
  background,
  className,
  particleColor = "#3b82f6",
}: SparklesCoreProps) => {
  return (
    <div
      id={id}
      className={`fixed inset-0 -z-10 overflow-hidden ${className}`}
      style={{ background }}
    >
      <Canvas>
        <Sparkles particleColor={particleColor} />
      </Canvas>
    </div>
  );
};
