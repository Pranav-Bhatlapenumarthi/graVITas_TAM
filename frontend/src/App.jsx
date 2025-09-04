import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import SurvivalShowdown from "./pages/Events/SurvivalShowdown.jsx";
import Hackathon from "./pages/Events/Hackathon.jsx";
import DataAlchemy from "./pages/Events/DataAlchemy.jsx";
import Team from "./pages/Register/Team.jsx";
import Individual from "./pages/Register/Individual.jsx";

function App(){
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/survival-showdown" element={<SurvivalShowdown />} />
        <Route path="/events/data-alchemy" element={<DataAlchemy />} />
        <Route path="/events/hackathon" element={<Hackathon />} />
        <Route path="/register/team" element={<Team />} />
        <Route path="/register/individual" element={<Individual />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;