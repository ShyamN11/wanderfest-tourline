function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const text = `Hello Wanderfest Tourline,%0A%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;

    window.open(
      `https://wa.me/917904579099?text=${text}`,
      "_blank"
    );
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>
        We are an online travel service.  
        Contact us anytime for tour bookings and enquiries.
      </p>

      {/* CONTACT FORM */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <textarea
          name="message"
          placeholder="Your Travel Requirement"
          rows="4"
          required
        ></textarea>

        <button type="submit" className="btn explore">
          Send Enquiry
        </button>
      </form>

      {/* SERVICE AREA */}
      <h2 style={{ marginTop: "50px" }}>Our Service Area</h2>
      <p>
        We operate tours in and around <strong>Ooty, Coonoor, Mysore, Wayanad</strong>
      </p>

      <div style={{ marginTop: "20px", borderRadius: "10px", overflow: "hidden" }}>
        <iframe
          title="Wanderfest Tourline Service Area"
          src="https://www.google.com/maps?q=Ooty,Tamil%20Nadu&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
