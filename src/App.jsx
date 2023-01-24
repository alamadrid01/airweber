import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './page/Homepage'
import Footer from './components/Footer'
import Contact from "./page/Contact"
import Story from "./page/Story"
import Services from "./page/Services"

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-story" element={<Story />} />
          <Route path="services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
          </div>
  )
}

export default App
