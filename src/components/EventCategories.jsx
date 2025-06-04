import { motion } from 'framer-motion'

const categories = ['All', 'Concerts', 'Conferences', 'Weddings', 'Workshops']

export default function EventCategories({ onSelectCategory }) {
  return (
    <motion.section
      id="categories"
      className="py-20 px-10 bg-gradient-to-b from-purple-900 to-black text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Event Categories</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            onClick={() => onSelectCategory(cat === 'All' ? null : cat)}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-700 text-black dark:text-white px-6 py-4 rounded-xl shadow-md cursor-pointer"
          >
            {cat}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
