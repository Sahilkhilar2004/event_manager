import { motion } from "framer-motion";
import ThreeDObject from "./ThreeDObject";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gradient-to-b from-black to-purple-900 text-white"
    >
      <motion.div
        className="md:w-1/2"
        layout
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Host and Manage Events Easily
        </h1>
        <p className="text-lg mb-6">
          Empower your audience with modern, interactive event experiences.
        </p>

        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-60}
          className="bg-purple-700 text-white px-6 py-3 rounded-xl cursor-pointer"
          
        >
          Get Started
        </Link>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-0 md:w-1/2"
        layout
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ThreeDObject />
      </motion.div>
    </div>
  );
}
