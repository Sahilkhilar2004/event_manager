import { useState } from "react";
import { motion } from "framer-motion";

export default function UpcomingEvents({
  selectedCategory,
  events = [],
  onBook,
  onDelete,
  onEdit,
  currentUserEmail,
}) {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    date: "",
    location: "",
    category: "",
  });

  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  const handleEditClick = (event, index) => {
    setEditIndex(index);
    setEditData(event);
  };

  const handleSaveEdit = () => {
    onEdit(editIndex, editData);
    setEditIndex(null);
  };

  return (
    <motion.section
      id="events"
      className="py-20 px-10 bg-gradient-to-b from-purple-900 to-black text-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-10">
        {selectedCategory ? `${selectedCategory} Events` : "Upcoming Events"}
      </h2>

      {filteredEvents.length === 0 ? (
        <p className="text-gray-300 text-lg">
          No events found for this category.
        </p>
      ) : (
        <div className="space-y-6 max-w-2xl mx-auto">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/10 rounded-xl shadow-lg backdrop-blur-md"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {editIndex === index ? (
                <>
                  <input
                    className="w-full mb-2 px-3 py-2 rounded bg-white/20 text-white"
                    value={editData.name}
                    onChange={(e) =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                    placeholder="Event Name"
                  />
                  <input
                    className="w-full mb-2 px-3 py-2 rounded bg-white/20 text-white"
                    value={editData.date}
                    onChange={(e) =>
                      setEditData({ ...editData, date: e.target.value })
                    }
                    placeholder="Date"
                  />
                  <input
                    className="w-full mb-2 px-3 py-2 rounded bg-white/20 text-white"
                    value={editData.location}
                    onChange={(e) =>
                      setEditData({ ...editData, location: e.target.value })
                    }
                    placeholder="Location"
                  />
                  <input
                    className="w-full mb-4 px-3 py-2 rounded bg-white/20 text-white"
                    value={editData.category}
                    onChange={(e) =>
                      setEditData({ ...editData, category: e.target.value })
                    }
                    placeholder="Category"
                  />
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={handleSaveEdit}
                      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditIndex(null)}
                      className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-purple-300">
                    {event.name}
                  </h3>
                  <p className="text-gray-200">
                    {event.date} — {event.location}
                  </p>
                  <p className="text-sm text-indigo-400 mt-1">
                    {event.category}
                  </p>
                  <div className="mt-4 flex justify-center gap-3 flex-wrap">
                    <button
                      onClick={() => onBook(event)}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
                    >
                      Book
                    </button>

                    {event.createdBy === currentUserEmail && (
                      <>
                        <button
                          onClick={() => handleEditClick(event, index)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => onDelete(index)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
