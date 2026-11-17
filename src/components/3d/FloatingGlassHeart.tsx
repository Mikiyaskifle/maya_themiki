import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshReflectorMaterial, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

export default function FloatingGlassHeart() {
  const heartRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  // Animation loop
  useFrame((state) => {
    if (heartRef.current) {
      // Gentle floating animation
      heartRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      heartRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
      
      // Subtle scale pulse
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02
      heartRef.current.scale.setScalar(scale)
    }
    
    if (groupRef.current) {
      // Slow overall rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  // Create heart shape geometry
  const heartShape = new THREE.Shape()
  const x = 0, y = 0
  heartShape.moveTo(x + 0, y + 0.5)
  heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.5, y + 0, x + 0, y + 0)
  heartShape.bezierCurveTo(x - 0.5, y + 0, x - 0.5, y + 0.5, x + 0, y + 0.5)

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <mesh ref={heartRef} castShadow receiveShadow>
          <extrudeGeometry 
            args={[
              heartShape,
              {
                steps: 2,
                depth: 0.2,
                bevelEnabled: true,
                bevelThickness: 0.05,
                bevelSize: 0.05,
                bevelOffset: 0,
                bevelSegments: 10
              }
            ]}
          />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={40}
            roughness={0.1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#F1A5B5"
            metalness={0.8}
            mirror={0.8}
          />
        </mesh>
      </Float>

      {/* Inner glowing core */}
      <mesh position={[0, 0, 0.1]} scale={0.9}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#A71942"
          emissive="#A71942"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Rose petals particles */}
      <Sparkles
        count={50}
        scale={10}
        size={0.5}
        speed={0.2}
        color="#F1A5B5"
        position={[0, 0, 0]}
      />

      {/* Outer glow particles */}
      <Sparkles
        count={30}
        scale={12}
        size={1}
        speed={0.1}
        color="#A71942"
        position={[0, 0, 0]}
      />
    </group>
  )
}