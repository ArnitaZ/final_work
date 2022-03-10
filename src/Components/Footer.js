import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-expand-lg mx-3 border-top bg-light">
      <div className="row">
        <p>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-4 mt-1">
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
        </p>
      </div>
    </footer>
  );
}
export default Footer;
