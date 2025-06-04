import { useState } from 'react'

export default function CreateEvent({ onCreate }) {
  const [form, setForm] = useState({
    name: '',
    date: '',
    location: '',
    category: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.date && form.location && form.category) {
      onCreate(form)
      setForm({ name: '', date: '', location: '', category: '' })
    }
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black to-purple-900 text-white text-center">
      <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-purple-300">Create New Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-white/20 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          >
            <option className="bg-purple-900" value="">Select Category</option>
            <option className="bg-purple-900" value="Concerts">Concerts</option>
            <option className="bg-purple-900" value="Conferences">Conferences</option>
            <option className="bg-purple-900" value="Weddings">Weddings</option>
            <option className="bg-purple-900" value="Workshops">Workshops</option>
          </select>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded mt-4 transition"
          >
            Submit Event
          </button>
        </form>
      </div>
    </section>
  )
}
