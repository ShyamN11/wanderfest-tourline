import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import React from "react";

/* ERROR BOUNDARY */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("App crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h2>Something went wrong.</h2>
          <p>Please refresh the page or contact us on WhatsApp.</p>
          <a
            href="https://wa.me/917904579099"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 20px",
              background: "#25d366",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            WhatsApp Us
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  console.log("App rendered");

  return (
    <ErrorBoundary>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour/:slug" element={<TourDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <FloatingButtons />
    </ErrorBoundary>
  );
}

export default App;
