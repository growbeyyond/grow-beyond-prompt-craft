import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Text } from '@react-three/drei'
import * as THREE from 'three'

interface LotteryBallProps {
  number: number
  position: [number, number, number]
  color?: string
  isSelected?: boolean
  animationDelay?: number
}

export const LotteryBall = ({ 
  number, 
  position, 
  color = "#ef4444",
  isSelected = false,
  animationDelay = 0 
}: LotteryBallProps) => {
  const ballRef = useRef<THREE.Group>(null)
  const [startAnimation, setStartAnimation] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true)
    }, animationDelay)
    
    return () => clearTimeout(timer)
  }, [animationDelay])
  
  useFrame((state) => {
    if (ballRef.current && startAnimation) {
      const time = state.clock.getElapsedTime()
      
      if (isSelected) {
        // Bounce animation for selected balls
        ballRef.current.position.y = position[1] + Math.sin(time * 4) * 0.2
        ballRef.current.rotation.x += 0.02
        ballRef.current.rotation.z += 0.01
      } else {
        // Gentle floating for unselected balls
        ballRef.current.position.y = position[1] + Math.sin(time * 2 + number) * 0.05
      }
    }
  })

  return (
    <group ref={ballRef} position={position}>
      <Sphere args={[0.4, 32, 32]} castShadow receiveShadow>
        <meshStandardMaterial
          color={isSelected ? "#10b981" : color}
          metalness={0.1}
          roughness={0.3}
          emissive={isSelected ? "#065f46" : "#000000"}
          emissiveIntensity={isSelected ? 0.2 : 0}
        />
      </Sphere>
      
      {/* Number on ball */}
      <Text
        position={[0, 0, 0.41]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        {number.toString().padStart(2, '0')}
      </Text>
    </group>
  )
}