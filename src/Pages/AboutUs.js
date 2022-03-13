import { Link } from "react-router-dom";
import ContactsTab from "../Components/ContactsTab";
import FreeTimeTab from "../Components/FreeTimeTab";
import "../Components/Main.css";

function AboutUs() {
  return (
    <div>
      <div className="row ps-0 ps-md-5">
        <div>
          <p className="subsequence">
            <span>
              <Link to="/">Home</Link>
              {">"}
            </span>
            <span id="lastSubsequenceColor">About Us</span>
          </p>
          <div className="row"></div>
        </div>
        <div>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <btn
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                style={{
                  background:
                    "linear-gradient(to bottom, #ffff 15%, #eee3a8 95%)",
                  color: "grey",
                }}
              >
                Contacts
              </btn>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
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
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <ContactsTab />
            </div>
            <div
              className="tab-pane fade"
              id="address"
              role="tabpanel"
              aria-labelledby="address-tab"
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
