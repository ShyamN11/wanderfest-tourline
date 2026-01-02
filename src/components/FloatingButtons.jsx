function FloatingButtons() {
  return (
    <>
      <a
        href="tel:+918807509155"
        className="floating-btn call-float"
        aria-label="Call Now"
      >
        📞
      </a>

      <a
        href="https://wa.me/918807509155"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-float"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </>
  );
}

export default FloatingButtons;
