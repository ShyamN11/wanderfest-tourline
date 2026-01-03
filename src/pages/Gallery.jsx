function Gallery() {
  const images = [
    "/images/pykara.jpg",
    "/images/coonoor.jpg",
    "/images/mudumalai.jpg",
    "/images/hero.jpg",
  ];

  return (
    <div className="container">
      <h1>Travel Gallery</h1>
      <p>Beautiful moments from our tour destinations</p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt="Tour destination" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
