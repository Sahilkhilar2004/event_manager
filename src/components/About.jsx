import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-10 text-center bg-gradient-to-b from-purple-900 to-black text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
      <p className="max-w-xl mx-auto text-lg">
        We offer cutting-edge event management tools with a sleek, modern interface. Easily plan, promote, and host events.
      </p>
    </motion.section>
  );
}
