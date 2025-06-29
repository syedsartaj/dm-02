import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AboutPage from './AboutPage'; // adjust path if needed
import Home from './pages/Home';
import AboutPage from './pages/About';
import Contact from './pages/Contact';
import ContactUs from './pages/Contactus';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BlogList" element={<BlogList/>} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blogpage" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}
export default App;