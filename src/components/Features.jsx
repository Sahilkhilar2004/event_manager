import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
  {
    title: "Real-time RSVP management",
    description: "Manage guest lists dynamically with instant RSVP updates. Get notifications when attendees confirm or cancel.",
  },
  {
    title: "Custom branding & themes",
    description: "Personalize your event with custom themes, brand colors, and logo placement for a professional look.",
  },
  {
    title: "Interactive 3D venue previews",
    description: "Offer your guests an immersive 3D view of the venue layout and seating arrangements.",
  },
  {
    title: "Secure check-ins & QR support",
    description: "Speed up entry with QR codes and ensure safe, verified check-ins at every event.",
  }
]

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleCard = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <motion.section
      id="features"
      className="py-20 px-6 bg-gradient-to-b from-black to-purple-900 text-white"
       initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-10 p-4">Event Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            onClick={() => toggleCard(index)}
            className={`bg-purple-700 rounded-xl cursor-pointer p-6 transition-all shadow-xl ${
              activeIndex === index ? 'shadow-2xl scale-105' : ''
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-medium mb-2 ">{feature.title}</h3>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  className="text-purple-100 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {feature.description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
