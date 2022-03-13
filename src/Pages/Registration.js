import { Link } from "react-router-dom";

function Registration() {
  return (
    <div>
      <div class="row">
        <div class="col-md-6">
          <h5>Register:</h5>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <div class="column">
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
              type="password"
              placeholder="Enter First name*"
              name="psw"
              id="psw"
              required
            />
            <br />
            <input
              type="password"
              placeholder="Enter Last name"
              name="psw"
              id="psw"
              required
            />
            <br />
            <input
              type="password"
              placeholder="Enter Country*"
              name="psw"
              id="psw"
              required
            />
            <hr />
          </div>
          <p>
            By creating an account you agree to our
            <Link to="https://www.termsfeed.com/blog/sample-privacy-policy-template/#Download_Sample_Privacy_Policy_Template">
              Terms & Privacy
            </Link>
            .
          </p>
          <button
            type="submit"
            class="registerbtn"
            style={{ background: "#b24e59", color: "#E7D6F7" }}
          >
            Register
          </button>
        </div>
        <div class="container signin">
          <p>
            Already have an account? <Link to="/chat">Sign in</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Registration;
