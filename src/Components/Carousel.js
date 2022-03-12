function Carousel() {
  return (
    <div className="container">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade justify-content-center"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item justify-content-center active">
            <img
              src="/images/IMG-1.jpg"
              class="d-block w-100 align-items-center"
              alt="winter sea landscape with swans"
            />
          </div>
          <div class="carousel-item justify-content-center">
            <img
              src="/images/IMG-2.jpg"
              class="d-block w-100 align-items-center"
              alt="winter scene"
            />
          </div>
          <div class="carousel-item justify-content-center">
            <img
              src="/images/IMG-6.jpg"
              class="d-block w-100"
              alt="winter sea landscape"
            />
          </div>
          <div class="carousel-item justify-content-center">
            <img
              src="/images/IMG-4.jpg"
              class="d-block w-100"
              alt="winter sea landscape"
            />
          </div>
          <div class="carousel-item justify-content-center">
            <img
              src="/images/IMG-5.jpg"
              class="d-block w-100"
              alt="winter sea landscape"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev justify-content-center"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Carousel;
