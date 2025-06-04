import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      toast.error("❌ Please enter a valid email!", {
        theme: "light",
        icon: "⚠️",

        style: {
          background: "#F87171",
          color: "#1F2937",
          fontWeight: "bold",
          borderRadius: "12px",
          fontSize: "1rem",
        },
      });
    } else {
      toast.success("✅ Subscribed successfully!", {
        theme: "dark",
        icon: "🚀",

        style: {
          background: "#6B21A8",
          color: "#fff",
          fontWeight: "600",
          borderRadius: "12px",
          fontSize: "1rem",
        },
      });
      setEmail("");
    }
  };

  return (
    <motion.section
      id="contact"
      className=" bg-gradient-to-b from-purple-900 to-black text-center py-20 px-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
        Stay Updated
      </h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Subscribe to get event news and updates.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-2 rounded-lg text-black"
        />
        <button
          type="submit"
          className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-all"
        >
          Subscribe
        </button>
      </form>
    </motion.section>
  );
}
