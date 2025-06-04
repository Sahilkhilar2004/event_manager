import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>© {new Date().getFullYear()} Eventify. All rights reserved.</p>
    </motion.footer>
  )
}
