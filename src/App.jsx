import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
console.log("App loaded successfully");


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour/:slug" element={<TourDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FloatingButtons />
    </>
  );
}

export default App;
