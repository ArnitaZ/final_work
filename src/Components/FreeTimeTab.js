import CarouselMemes from "./CarouselMemes";

function FreeTimeTab() {
  return (
    <div>
      <h4>Free time</h4>
      <p>Please have a minute to smile before leaving our page!</p>
      <div className="row align-items-start">
        <div className="col-3 "></div>
        <div className="col-6 ">
          <CarouselMemes />
        </div>
        <div className="col-3 "></div>
      </div>
    </div>
  );
}
export default FreeTimeTab;
