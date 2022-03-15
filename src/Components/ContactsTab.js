import Map from "./Map";

function ContactsTab() {
  return (
    <div>
      <h4>Contacts</h4>
      <div className="card " style={{ width: "113rem" }}>
        <div className="row g-0">
          <div className="col-md-2">
            <img
              src="/images/logo.png"
              className="img-thumbnail"
              width="300"
              alt="logo camera"
            />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">Hello You!</h5>
              <p>
                Photography is a way of making a picture using a camera. A
                person who makes pictures using a camera is called a
                photographer. A picture made using a camera is called a
                photograph or photo. Photography became popular in the middle
                19th century with Daguerreotype.Photographers must have superior
                technical skills. They must be proficient in using cameras and
                have a good understanding of studio and exterior lighting. They
                must also be adept at using photo-editing software to complete
                post-production work.Becoming a photographer can give you an
                entirely new perspective on everyday life. You can use
                photography to turn almost anything you find beautiful into a
                work of art. You can use your photographic skills to creatively
                capture an array of subjects that ranges from children's
                emotions to family gatherings.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 d-flex flex-column">
          <Map />
        </div>
        <div className="col-8 mt-3 mb-4 d-flex flex-column">
          <br></br>
          <h6>Address:</h6>
          <p>Pils laukums 3, Centra rajons, Rīga, LV-1050</p>
          <h6>E-mail:</h6>
          <p>hello@fototev.lv</p>
          <h6>Phone:</h6>
          <p>+371 26208098</p>
        </div>
      </div>
    </div>
  );
}
export default ContactsTab;
