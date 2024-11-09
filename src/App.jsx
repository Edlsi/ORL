import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import About from './pages/About';
import News from './pages/News';
import ReadMore from './pages/ReadMore';
import Undergraduate from './pages/admission/Undergraduate';
import Computerscience from './pages/departments/Computerscience';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <div className=""> {/* Added padding for spacing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/contact"
              element={
                <div className="bg-gray-50 min-h-screen text-gray-900">
                  <ContactSection />
                  <FAQSection />
                </div>
              }
            />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/read" element={<ReadMore />} />
              <Route path="/undergraduate" element={<Undergraduate />} />
              <Route path="/computersc" element={<Computerscience />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
