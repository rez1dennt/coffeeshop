import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import OurCoffee from "./pages/OurCoffee";
import Pleasure from "./pages/Pleasure";

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/OurCoffee" element={<OurCoffee />} />
            <Route path="/Pleasure" element={<Pleasure />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
