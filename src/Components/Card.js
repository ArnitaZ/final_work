import { Link } from "react-router-dom";
import "../Components/Main.css";

function Card() {
  return (
    <div>
      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div
                className="card shadow-sm align-items-center"
                style={{ border: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="32"
                  fill="currentColor"
                  class="bi bi-people-fill"
                  viewBox="0 0 16 8"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
                <div className="card-body align-items-center">
                  <h4>Couples</h4>
                  <div className="d-flex justify-content-between">
                    <div className="btn-group">
                      <Link
                        to="/articleC"
                        className="btn btn-sm btn-outline-secondary"
                        role="button"
                        aria-disabled="true"
                      >
                        Explore more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card shadow-sm align-items-center"
                style={{ border: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="32"
                  fill="currentColor"
                  class="bi bi-person-hearts"
                  viewBox="0 0 16 8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
                  />
                </svg>
                <div className="card-body align-items-center">
                  <h4 className="card-text">Family</h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link
                        to="/articleC"
                        className="btn btn-sm btn-outline-secondary"
                        role="button"
                        aria-disabled="true"
                      >
                        Explore more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card shadow-sm align-items-center"
                style={{ border: "none" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="32"
                  fill="currentColor"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                <div className="card-body align-items-center">
                  <h4 className="card-text">Wedding</h4>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link
                        to="articleC"
                        className="btn btn-sm btn-outline-secondary"
                        role="button"
                        aria-disabled="true"
                      >
                        Explore more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
