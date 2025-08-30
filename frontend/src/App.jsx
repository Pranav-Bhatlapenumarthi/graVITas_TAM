import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

// import "./App.css";

function App(){
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/events" element={<Events />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;