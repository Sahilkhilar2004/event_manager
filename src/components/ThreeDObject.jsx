import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Html, useProgress } from '@react-three/drei'
import { Suspense } from 'react'
import { motion } from 'framer-motion'


function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="text-white text-xl font-semibold bg-black/70 px-6 py-3 rounded-lg shadow-lg">
        Loading {Math.floor(progress)}%
      </div>
    </Html>
  )
}

export default function ThreeDObject() {
  return (
    <motion.div
      className="w-full h-[300px] md:h-[400px] flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Canvas
     
        className="w-full h-full"
        style={{ background: 'transparent' }}
        camera={{ position: [0, 0, 4], fov: 50 }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 1]} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate />
          <Sphere args={[0.8, 64, 64]} position={[0, 0, 0]}>
            <MeshDistortMaterial
              color="#915EFF"
              distort={0.4}
              speed={4}
              roughness={0.2}
            />
          </Sphere>
        </Suspense>
      </Canvas>
    </motion.div>
  )
}
