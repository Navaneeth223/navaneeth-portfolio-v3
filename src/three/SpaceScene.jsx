import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Stars, Trail, Text, Sphere, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Planet({ position, color, size, speed = 0.2 }) {
  const ref = useRef()
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * speed })
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.4} />
      </mesh>
    </Float>
  )
}

function SkillStar({ position, color }) {
  const ref = useRef()
  useFrame((_, d) => { if (ref.current) ref.current.rotation.z += d * 0.5 })
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.12, 0]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} />
    </mesh>
  )
}

function Rig() {
  const { camera, pointer } = useThree()
  useFrame(() => {
    camera.position.x += (pointer.x * 1.5 - camera.position.x) * 0.04
    camera.position.y += (-pointer.y * 1.2 - camera.position.y) * 0.04
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function SpaceScene({ skillStars = false }) {
  const stars = useMemo(
    () => Array.from({ length: 14 }, () => [
      (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 8
    ]),
    []
  )
  const palette = ['#22d3ee', '#a855f7', '#ec4899', '#a3e635']
  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 60 }} dpr={[1, 2]} gl={{ antialias: true }}>
      <color attach="background" args={['#03040a']} />
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#22d3ee" />
      <pointLight position={[-6, -4, -3]} intensity={0.8} color="#a855f7" />
      <Stars radius={60} depth={40} count={2500} factor={3} fade speed={0.6} />
      <Planet position={[-4.5, 1.5, -3]} color="#22d3ee" size={0.9} speed={0.25} />
      <Planet position={[4.2, -1.8, -4]} color="#ec4899" size={1.2} speed={0.18} />
      <Planet position={[2.5, 2.6, -6]} color="#a3e635" size={0.6} speed={0.3} />
      <Float speed={2} floatIntensity={3}>
        <Text font="/Inter_Bold.json" fontSize={1.1} color="#e6edf3" anchorX="center" anchorY="middle" position={[0, 0, 0]}>
          NAVI
        </Text>
      </Float>
      {skillStars && stars.map((p, i) => (
        <SkillStar key={i} position={p} color={palette[i % palette.length]} />
      ))}
      <Rig />
    </Canvas>
  )
}
