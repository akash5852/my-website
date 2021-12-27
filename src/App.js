import './App.css';
import Navbar from './Components/Navbar.js'
import Home from './Pages/Home.js'
import Projects from './Pages/Projects.js'
import Contact from './Pages/Contact.js'
import Footer from './Components/Footer.js';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="relative min-h-[100vh] App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
