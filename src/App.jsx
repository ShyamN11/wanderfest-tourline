import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour/:slug" element={<TourDetails />} />
      </Routes>

      <FloatingButtons />
    </>
  );
}

export default App;
