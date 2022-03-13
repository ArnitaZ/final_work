import "../Components/Main.css";

function FancyBox() {
  return (
    <div>
      <div className="row pt-4">
        <div className="col-md-4 pt-4">
          <a href="images/IMG-1.jpg" data-fancybox="gallery">
            <img src="images/IMG-1.jpg" className="imgFancyBox" alt="orchid" />
          </a>
        </div>
        <div className="col-md-4 pt-4">
          <a href="images/IMG-2.jpg" data-fancybox="gallery">
            <img src="images/IMG-2.jpg" className="imgFancyBox" alt="hug" />
          </a>
        </div>
        <div className="col-md-2 pt-4">
          <a href="images/IMG-3.jpg" data-fancybox="gallery">
            <img src="images/IMG-3.jpg" className="imgFancyBox" alt="hug" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 pt-4">
          <a href="images/IMG-4.jpg" data-fancybox="gallery">
            <img src="images/IMG-4.jpg" className="imgFancyBox" alt="hug" />
          </a>
        </div>
        <div className="col-md-4 pt-4">
          <a href="images/IMG-4.jpg" data-fancybox="gallery">
            <img src="images/IMG-4.jpg" className="imgFancyBox" alt="hug" />
          </a>
        </div>
        <div className="col-md-4 pt-4">
          <a href="images/IMG-5.jpg" data-fancybox="gallery">
            <img src="images/IMG-5.jpg" className="imgFancyBox" alt="hug" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 pt-4">
          <a href="images/IMG-4.jpg" data-fancybox="gallery">
            <img src="images/IMG-4.jpg" className="imgFancyBox" alt="hug" />
          </a>
        </div>
        <div className="col-md-4 pt-4">
          <a href="images/IMG-4.jpg" data-fancybox="gallery">
            <img src="images/IMG-4.jpg" className="imgFancyBox" alt="hug" />
          </a>
        </div>
        <div className="col-md-4 pt-4">
          <a href="images/IMG-5.jpg" data-fancybox="gallery">
            <img src="images/IMG-5.jpg" className="imgFancyBox" alt="hug" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 pt-4">
          <a href="images/IMG-4.jpg" data-fancybox="gallery">
            <img src="images/IMG-4.jpg" className="imgFancyBox" alt="hug" />
          </a>
        </div>
        <div className="col-md-4 pt-4">
          <a href="images/IMG-4.jpg" data-fancybox="gallery">
            <img src="images/IMG-4.jpg" className="imgFancyBox" alt="hug" />
          </a>
        </div>
        <div className="col-md-4 pt-4">
          <a href="images/IMG-5.jpg" data-fancybox="gallery">
            <img src="images/IMG-5.jpg" className="imgFancyBox" alt="hug" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FancyBox;
