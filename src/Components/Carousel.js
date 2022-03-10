function Carousel() {
  return (
    <div className="row item-align-center">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade item-align-center"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner ">
          <div class="carousel-item item-align-center active">
            <img
              src="/images/IMG-1.jpg"
              class="d-block w-80 align-items-center"
              alt="winter sea landscape with swans"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/images/IMG-2.jpg"
              class="d-block w-80 align-items-center"
              alt="winter scene"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/images/IMG-3.jpg"
              class="d-block w-80"
              alt="winter sea landscape"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
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
