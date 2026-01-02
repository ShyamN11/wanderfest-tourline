function FloatingButtons() {
  return (
    <>
      <a
        href="tel:+917904579099"
        className="floating-btn call-float"
        aria-label="Call Now"
      >
        📞
      </a>

      <a
        href="https://wa.me/917904579099"
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
