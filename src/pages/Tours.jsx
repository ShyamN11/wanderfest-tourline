import tours from "../data/tours";
import { Link } from "react-router-dom";

function Tours() {
  return (
    <div className="container">
      <h2 className="section-title">Our Tour Packages</h2>

      <div className="tour-grid">
        {tours.map((tour) => {
          const whatsappText = encodeURIComponent(
            `Hi Wanderfest Tourline, I'm interested in the "${tour.title}" (${tour.duration}) package. Please share details.`
          );

          return (
            <div className="tour-card" key={tour.slug}>
              <img src={tour.image} alt={tour.title} />

              <div className="tour-content">
                <h3>{tour.title}</h3>
                <p>{tour.duration}</p>
                <p className="price">{tour.price}</p>

                <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                  <Link to={`/tour/${tour.slug}`}>
                    <button className="btn explore">View Details</button>
                  </Link>

                  <a
                    href={`https://wa.me/917904579099?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn whatsapp"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tours;
