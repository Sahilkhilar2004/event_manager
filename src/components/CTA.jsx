import { motion } from 'framer-motion';
import { Link } from "react-scroll";
export default function CTA() {
  return (
    <motion.section
    id="about"
      className=" bg-gradient-to-b from-black to-purple-900  text-white py-20 px-10 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">Ready to Organize Your Next Event?</h2>
      <p className="mb-6">Join thousands of organizers already using our platform.</p>
      <Link
  to="Cevent"
  smooth={true}
  duration={600}
  offset={-60}
  className="bg-white text-purple-700 px-8 py-3 font-semibold rounded-xl cursor-pointer"
>
  Try Now
</Link>
    </motion.section>
  );
}
