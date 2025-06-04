import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import EventCategories from "./components/EventCategories";
import Gallery from "./components/Gallery";
import UpcomingEvents from "./components/UpcomingEvents";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateEvent from "./components/CreateEvent";


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [bookingEvent, setBookingEvent] = useState(null);
  const [userName, setUserName] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("sahil@gmail.com"); 

  const [userEmail, setUserEmail] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [allEvents, setAllEvents] = useState([
    {
      name: "Tech Summit 2025",
      date: "June 10",
      location: "Bangalore",
      category: "Conferences",
    },
    {
      name: "Indie Fest",
      date: "July 5",
      location: "Delhi",
      category: "Concerts",
    },
    {
      name: "Startup Expo",
      date: "August 12",
      location: "Mumbai",
      category: "Conferences",
    },
    {
      name: "Wedding Expo",
      date: "September 2",
      location: "Chennai",
      category: "Weddings",
    },
    {
      name: "React Workshop",
      date: "October 15",
      location: "Pune",
      category: "Workshops",
    },
  ]);
  // ✅ events stored here
  const eventRef = useRef(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      eventRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleBookEvent = (event) => {
    setBookingEvent(event);
    
  };

const handleSubmitBooking = () => {
  if (!bookingEvent) return; // prevent crash if null

  toast.success(`Booking confirmed for ${bookingEvent.name}`, {
    autoClose: 2500,
    pauseOnHover: true,
    closeOnClick: true,
  });

  setTimeout(() => {
    setBookingEvent(null);
    setUserName("");
    setUserEmail("");
  }, 100);
};


  const handleEventCreate = (newEvent) => {
  const eventWithUser = { ...newEvent, createdBy: currentUserEmail };
  setAllEvents((prev) => [...prev, eventWithUser]);
  toast.success(`Event "${newEvent.name}" created!`);
  setShowCreateForm(false);
};


  const handleDeleteEvent = (index) => {
    setAllEvents((prev) => prev.filter((_, i) => i !== index));
    toast.info("Event deleted");
  };

  const handleEditEvent = (index, updatedEvent) => {
    const updatedEvents = [...allEvents];
    updatedEvents[index] = updatedEvent;
    setAllEvents(updatedEvents);
    toast.success("Event updated");
  };

  return (
    <div className="font-sans relative">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Features />
        <EventCategories onSelectCategory={handleSelectCategory} />
        <Gallery />

        <div
          id="Cevent"
          className="w-full py-10 bg-gradient-to-b from-black to-purple-900 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to host an event?
          </h2>
          <button
            onClick={() => setShowCreateForm((prev) => !prev)}
            className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition font-semibold shadow-md"
          >
            {showCreateForm ? "Close Create Event Form" : "Create New Event"}
          </button>
        </div>

        {showCreateForm && (
          <div className="py-10 px-4 bg-gradient-to-b from-purple-900 to-black">
            <CreateEvent onCreate={handleEventCreate} />
          </div>
        )}

        {/* ✅ Pass events as prop */}
        <div ref={eventRef}>
          <UpcomingEvents
            selectedCategory={selectedCategory}
            onBook={handleBookEvent}
            events={allEvents}
            onDelete={handleDeleteEvent}
            onEdit={handleEditEvent}
             currentUserEmail={currentUserEmail}
          />
             
        </div>

        <CTA />
        <Contact />
      </div>
   
      <Footer />
      <ToastContainer position="top-center" autoClose={2500} />

      {bookingEvent && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">
              Book: {bookingEvent.name}
            </h2>
            <input
              type="text"
              placeholder="Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full mb-4 px-4 py-2 rounded border border-gray-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full mb-4 px-4 py-2 rounded border border-gray-300"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setBookingEvent(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitBooking}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                disabled={!userName || !userEmail}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
// Trigger redeploy

export default App;
