import tours from "../data/tours";
import { Link } from "react-router-dom";

function Tours() {
  return (
    <div className="container">
      <h2 className="section-title">Our Tour Packages</h2>

      <div className="tour-grid">
        {tours.map((tour) => (
          <div className="tour-card" key={tour.slug}>
            <img src={tour.image} alt={tour.title} />

            <div className="tour-content">
              <h3>{tour.title}</h3>
              <p>{tour.duration}</p>
              <p className="price">{tour.price}</p>

              <Link to={`/tour/${tour.slug}`}>
                <button className="btn explore">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;
