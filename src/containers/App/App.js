import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from '../../components/NavBar'
import About from '../Pages/About/About'
import Home from '../Pages/Home/Home'
import Footer from '../../components/Footer/Footer'

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/talents-app" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
