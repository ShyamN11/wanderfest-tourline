import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1 className="hero-title">WANDERFEST TOURLINE</h1>

      <p className="hero-sub">
        Explore Ooty, Coonoor, Mysore & more with comfort and trust
      </p>

      <div className="hero-buttons">
        <a
          href="tel:+917904579099"
          className="btn call"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/917904579099"
          target="_blank"
          rel="noopener noreferrer"
          className="btn whatsapp"
        >
          WhatsApp
        </a>
      </div>

      <Link to="/tours">
        <button className="btn explore hero-explore">
          View Packages
        </button>
      </Link>
    </div>
  );
}

export default Home;
