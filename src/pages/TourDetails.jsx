import { useParams } from "react-router-dom";
import tours from "../data/tours";

function TourDetails() {
  const { slug } = useParams();
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return <h2 className="center">Tour not found</h2>;
  }

  return (
    <div className="container">
      <h1 className="detail-title">{tour.title}</h1>
      <p className="detail-sub">{tour.duration} • {tour.price}</p>

      <img
        src={tour.image}
        alt={tour.title}
        className="detail-img"
      />

      <h2 className="section-title">Day-wise Itinerary</h2>

      <div className="timeline">
        {tour.itinerary.map((day, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot">{index + 1}</div>
            <div className="timeline-content">
              <p>{day}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TourDetails;
