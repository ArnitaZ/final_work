import { Link } from "react-router-dom";
import ContactsTab from "../Components/ContactsTab";
import FreeTimeTab from "../Components/FreeTimeTab";
import "../Components/Main.css";

function AboutUs() {
  return (
    <div>
      <div className="row">
        <div>
          <p className="subsequence">
            <span>
              <Link to="/">Home</Link>
              {">"}
            </span>
            <span id="lastSubsequenceColor">About Us</span>
          </p>
        </div>
        <div className="row ps-0 ps-md-5">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                style={{
                  background:
                    "linear-gradient(to bottom, #ffff 15%, #eee3a8 95%)",
                  color: "grey",
                }}
              >
                Contacts
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="freeTime-tab"
                data-bs-toggle="tab"
                data-bs-target="#freeTime"
                type="button"
                role="tab"
                aria-controls="freeTime"
                aria-selected="false"
                style={{
                  background:
                    "linear-gradient(to bottom, #ffff 15%, #eee3a8 95%)",
                  color: "grey",
                }}
              >
                Free Time
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <ContactsTab />
            </div>
            <div
              className="tab-pane fade"
              id="freeTime"
              role="tabpanel"
              aria-labelledby="freeTime-tab"
            >
              <FreeTimeTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
