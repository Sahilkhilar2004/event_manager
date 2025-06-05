# 🎉 Event Manager Web App

An interactive, fully responsive **Event Organizer & Booking Platform** built with **React.js**, **Tailwind CSS**, **Framer Motion**, and **Three.js**. Users can explore, filter, book, and create events — all in a seamless, animated interface.

### 🌐 Live Demo:  
[https://event-manager-sahil-khilars-projects.vercel.app/](https://event-manager-sahil-khilars-projects.vercel.app/)

---

## 📌 Features

### ✅ General Features
- Beautiful, animated landing page with smooth scroll transitions
- Responsive design for mobile, tablet, and desktop
- Dark overlay modals and elegant UI components
- Toast notifications for actions like booking, editing, deleting, etc.

### ✅ Event Booking
- Users can **book any event**
- Modal form for name and email input
- On successful booking, a toast notification confirms the action

### ✅ Event Creation
- A user can **create a new event** using a clean form
- Events are stored in state and immediately rendered
- Auto-scroll to event section after category selection

### ✅ Event Management
- Logged-in users (hardcoded email: `sahil@gmail.com`) can:
  - **Edit events**
  - **Delete their created events**
- Conditional UI controls for creator vs general user

### ✅ Event Filtering
- Events are categorized (Conferences, Concerts, Workshops, etc.)
- Users can filter events by category via buttons
- Events dynamically re-render based on selected category

### ✅ UI/UX Libraries Used
- **Framer Motion** for animations
- **React Toastify** for alerts and confirmations
- **Tailwind CSS** for styling
- **@react-three/fiber** and `drei` for 3D visuals (planned or partial support)

---

## 🛠️ Tech Stack

| Frontend | Libraries / Frameworks       |
|----------|------------------------------|
| React    | Functional components, Hooks |
| Tailwind CSS | Utility-first styling    |
| Framer Motion | Animations & transitions |
| React Toastify | Toasts & notifications |
| React Three Fiber | 3D (optional)        |

---

## ⚙️ Installation & Running Locally

```
# Clone the repo
git clone https://github.com/your-username/event-manager.git
cd event-manager

# Install dependencies
npm install

# Run locally
npm run dev
App runs on: http://localhost:5173/
```


📁 Project Structure
.
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── EventCategories.jsx
│   │   ├── Gallery.jsx
│   │   ├── UpcomingEvents.jsx
│   │   ├── CreateEvent.jsx
│   │   ├── Contact.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx


🚀 Deployment
Deployed on Vercel

🔗 Live App:
https://event-manager-sahil-khilars-projects.vercel.app/

👤 Author
Sahil Khilar

GitHub : https://github.com/Sahilkhilar2004
Email : sahilkhilar2004@gmail.com


📄 License
This project is licensed under the MIT License.


🙏 Acknowledgements
React Toastify
Framer Motion
Tailwind CSS
React Three Fiber
