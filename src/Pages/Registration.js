import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="pt-4">
      <form>
        <div className="row">
          <div className="col-m">
            <p>Please fill in this form to create an account.</p>
            <hr />
            <div className="col">
              <input
                type="text"
                placeholder="Enter Email*"
                name="email"
                id="email"
                required
              />
              <br />
              <input
                type="password"
                placeholder="Enter Password*"
                name="psw"
                id="psw"
                required
              />
              <br />
              <input
                type="password"
                placeholder="Repeat Password*"
                name="psw-repeat"
                id="psw-repeat"
                required
              />
              <br />
              <input
                type="text"
                placeholder="Enter First name*"
                name="name"
                id="name"
                required
              />
              <br />
              <input
                type="text"
                placeholder="Enter Last name"
                name="lastName"
                id="lastNme"
                required
              />
              <br />
              <input
                type="text"
                placeholder="Enter Country*"
                name="country"
                id="country"
                required
              />
              <hr />
            </div>
            <p>
              By creating an account you agree to our
              <Link to="https://www.termsfeed.com/blog/sample-privacy-policy-template/#Download_Sample_Privacy_Policy_Template">
                {" "}
                Terms & Privacy
              </Link>
              .
            </p>
            <button type="submit" className="btn">
              Register
            </button>
          </div>
          <div className="container signin">
            <p>
              Already have an account? <Link to="/chat"> Sign in</Link>.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Registration;
