import { useParams } from "react-router-dom";
import tours from "../data/tours";

function TourDetails() {
  const { slug } = useParams();
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return <h2 className="center">Tour not found</h2>;
  }

  const whatsappText = encodeURIComponent(
    `Hi Wanderfest Tourline, I'm interested in the "${tour.title}" (${tour.duration}) package. Please share full itinerary, price details, and availability.`
  );

  return (
    <div className="container">
      <h1 className="detail-title">{tour.title}</h1>
      <p className="detail-sub">{tour.duration} • {tour.price}</p>

      <img src={tour.image} alt={tour.title} className="detail-img" />

      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <a
          href={`https://wa.me/917904579099?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn whatsapp"
        >
          Enquire on WhatsApp
        </a>
      </div>

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
