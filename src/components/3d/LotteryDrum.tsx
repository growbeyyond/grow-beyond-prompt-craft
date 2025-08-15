import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Cylinder, Text } from '@react-three/drei'
import * as THREE from 'three'

interface LotteryDrumProps {
  isSpinning: boolean
  numbers: number[]
}

export const LotteryDrum = ({ isSpinning, numbers }: LotteryDrumProps) => {
  const drumRef = useRef<THREE.Group>(null)
  
  useFrame(() => {
    if (drumRef.current && isSpinning) {
      drumRef.current.rotation.y += 0.1
      drumRef.current.rotation.x += 0.02
    }
  })

  return (
    <group ref={drumRef}>
      {/* Main drum cylinder */}
      <Cylinder args={[2, 2, 4, 32]} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial
          color="#2563eb"
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </Cylinder>
      
      {/* Drum caps */}
      <Cylinder args={[2.1, 2.1, 0.2, 32]} position={[0, 2.1, 0]} castShadow>
        <meshStandardMaterial color="#1d4ed8" metalness={0.8} roughness={0.1} />
      </Cylinder>
      <Cylinder args={[2.1, 2.1, 0.2, 32]} position={[0, -2.1, 0]} castShadow>
        <meshStandardMaterial color="#1d4ed8" metalness={0.8} roughness={0.1} />
      </Cylinder>
      
      {/* Numbers inside drum */}
      {numbers.map((number, index) => (
        <Text
          key={index}
          position={[
            Math.cos((index / numbers.length) * Math.PI * 2) * 1.5,
            Math.sin(index * 0.5) * 0.5,
            Math.sin((index / numbers.length) * Math.PI * 2) * 1.5
          ]}
          rotation={[0, (index / numbers.length) * Math.PI * 2, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {number.toString().padStart(2, '0')}
        </Text>
      ))}
    </group>
  )
}