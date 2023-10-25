import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThreeTierPricing from './components/Features';
import HeroSection from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Home() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}

function Services() {
  return (
    <div>
      <ThreeTierPricing />
    </div>
  );
}

export default App;
