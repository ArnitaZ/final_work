import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-expand-lg mx-3 border-top bg-light align-items-center justify-content-center">
      <div className="row align-items-center justify-content-center">
        <div className="col-2"></div>
        <div className="col-4">
          <ul className="nav list-unstyled d-flex mt-4 mb-3">
            <li className="ms-3">
              © 2022 Company, FotoTev Inc. by<strong> Arnita Zarina </strong>
            </li>
            <li className="ms-3"> ☎ +37126208098</li>
            <li className="ms-3">
              <Link
                className="text-muted"
                to="https://www.instagram.com/arnita_zarina/?hl=en"
                target="blank"
              >
                <img
                  src="https://www.madaracosmetics.com/media/wysiwyg/Instagram.png"
                  alt="instagram"
                  width="24"
                  height="24"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-2"></div>
      </div>
    </footer>
  );
}
export default Footer;
