import { Link } from "react-router-dom";

function Map() {
  return (
    <div className="row pt-5">
      <div>
        <iframe
          width="500"
          height="400"
          frameBorder="0"
          src="https://www.bing.com/maps/embed?h=400&w=500&cp=56.9464722580708~24.104690551757812&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
          scrolling="no"
          title="map"
        ></iframe>
        <div
          style={{
            whiteSpace: "nowrap",
            textAlign: "center",
            width: "500px",
            padding: "6px 0",
          }}
        >
          <Link
            id="largeMapLink"
            target="_blank"
            to="https://www.bing.com/maps?cp=56.9464722580708~24.104690551757812&amp;sty=r&amp;lvl=11&amp;FORM=MBEDLD"
          >
            Skatīt lielāku karti
          </Link>{" "}
          &nbsp; | &nbsp;
          <Link
            id="dirMapLink"
            target="_blank"
            to="https://www.bing.com/maps/directions?cp=56.9464722580708~24.104690551757812&amp;sty=r&amp;lvl=11&amp;rtp=~pos.56.9464722580708_24.104690551757812____&amp;FORM=MBEDLD"
          >
            Iegūt norādes
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Map;
