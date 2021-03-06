import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse mx-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link
              to="/"
              className="col-md-1 d-flex mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <img
                src="/images/logo.png"
                className="d-block"
                height="45px"
                display="center"
                alt="photocamera"
              />
            </Link>
          </ul>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/articles">
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chat">
                Chat
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registration">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                Abaut Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
