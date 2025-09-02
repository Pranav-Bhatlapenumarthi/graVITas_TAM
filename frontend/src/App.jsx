import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx"
import SurvivalShowdown from "./pages/Events/SurvivalShowdown.jsx";
import Hackathon from "./pages/Events/Hackathon.jsx";
import DataAlchemy from "./pages/Events/DataAlchemy.jsx";

// import "./App.css";

function App(){
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/survival-showdown" element={<SurvivalShowdown />} />
        <Route path="/events/data-alchemy" element={<DataAlchemy />} />
        <Route path="/events/hackathon" element={<Hackathon />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;