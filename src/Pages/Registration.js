import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pswRepeat, setPswRepeat] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 5;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="pt-4">
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-m">
          <p>Please fill in this form to create an account.</p>
          <hr />
          <div className="col">
            <Form.Control
              autoFocus
              type="email"
              placeholder="Enter Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <Form.Control
              type="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minlength="8"
            />
            <br />
            <Form.Control
              type="password"
              placeholder="Repeat Password*"
              value={pswRepeat}
              onChange={(e) => setPswRepeat(e.target.value)}
              required
            />
            <br />
            <Form.Control
              type="text"
              placeholder="Enter First name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <br />
            <Form.Control
              type="text"
              placeholder="Enter Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              optional
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
          <button type="submit" className="btn" abled={!validateForm()}>
            Register
          </button>
        </div>
        <label>
          <input type="checkbox" value="remember-me" />
          {""} Remember me
        </label>
        <div className="col signin">
          <p>
            Already have an account? <Link to="/chat"> Sign in</Link>.
          </p>
        </div>
      </form>
    </div>
  );
}
export default Registration;
