function Carousel() {
  return (
    <div className="container">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade justify-content-center"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item justify-content-center active">
            <img
              src="/images/IMG-1.jpg"
              className="d-block w-100 align-items-center"
              alt="winter sea landscape with swans"
            />
          </div>
          <div className="carousel-item justify-content-center">
            <img
              src="/images/IMG-2.jpg"
              className="d-block w-100 align-items-center"
              alt="winter scene"
            />
          </div>
          <div className="carousel-item justify-content-center">
            <img
              src="/images/IMG-6.jpg"
              className="d-block w-100"
              alt="winter sea landscape"
            />
          </div>
          <div className="carousel-item justify-content-center">
            <img
              src="/images/IMG-4.jpg"
              className="d-block w-100"
              alt="winter sea landscape"
            />
          </div>
          <div className="carousel-item justify-content-center">
            <img
              src="/images/IMG-5.jpg"
              className="d-block w-100"
              alt="winter sea landscape"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev justify-content-center"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Carousel;
