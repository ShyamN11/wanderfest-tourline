import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <h1 className="hero-title">WANDERFEST TOURLINE</h1>

        <p className="hero-sub">
          Explore Ooty, Coonoor, Mysore & more with comfort and trust
        </p>

        <div className="hero-buttons">
          <a href="tel:+917904579099" className="btn call">
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

      {/* TESTIMONIALS SECTION */}
      <div className="container">
        <h1>What Our Travelers Say</h1>
        <p>Real experiences from happy customers</p>

        <div className="tour-grid">
          <div className="tour-card">
            <div className="tour-content">
              <p>
                “Our Ooty trip was perfectly planned. Great support and smooth
                travel experience.”
              </p>
              <strong>— Family Traveler</strong>
            </div>
          </div>

          <div className="tour-card">
            <div className="tour-content">
              <p>
                “Very responsive on WhatsApp. Affordable packages and friendly
                coordination.”
              </p>
              <strong>— Couple Trip</strong>
            </div>
          </div>

          <div className="tour-card">
            <div className="tour-content">
              <p>
                “Best online tour service for Ooty and nearby places. Highly
                recommended.”
              </p>
              <strong>— Group Traveler</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
