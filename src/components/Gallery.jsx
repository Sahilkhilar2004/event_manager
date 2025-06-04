import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
  "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg",
  "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg",
  "https://images.pexels.com/photos/1679825/pexels-photo-1679825.jpeg",
 "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
     "https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
];

export default function Gallery() {
  return (
    <motion.section
    id="gallery"
      className="py-20 px-10 bg-white dark:bg-black text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl  text-zinc-200 font-bold mb-10">Event Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`event-${i}`}
            className="rounded-xl shadow-lg w-full h-64 object-cover cursor-pointer"
           initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
        ))}
      </div>
    </motion.section>
  );
}
