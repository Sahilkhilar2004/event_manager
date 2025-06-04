import { Html, useProgress } from '@react-three/drei'
import { motion } from 'framer-motion'

export default function Loader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <motion.div
        className="text-white text-xl font-bold bg-black bg-opacity-70 px-6 py-3 rounded-xl shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading {Math.floor(progress)}%
      </motion.div>
    </Html>
  )
}
