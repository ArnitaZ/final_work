import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Registration() {
  const [email, setEmail] = useState("");
  const [pass1, setPassword] = useState("");
  const [pass2, setPswRepeat] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function validateForm() {
    return email.length > 0 && pass1.length > 0;
  }

  function formSubmit(event) {
    let pass = document.getElementById("pass1").value;
    let repass = document.getElementById("pass2").value;

    if (pass !== repass) {
      alert("Passwords must match!");
      return false;
    } else {
      alert("Passwords match");
      return true;
    }
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
              value={pass1}
              onChange={(e) => setPassword(e.target.value)}
              required
              minlength="8"
              onSubmit={formSubmit}
            />
            <br />
            <Form.Control
              type="password"
              placeholder="Repeat Password*"
              value={pass2}
              onChange={(e) => setPswRepeat(e.target.value)}
              required
              onSubmit={formSubmit}
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
            <label for="country" class="form-label"></label>
            <select id="country" class="text-muted form-select" required>
              <option selected disabled value>
                Country*
              </option>
              <option>Estonia</option>
              <option>France</option>
              <option>Germany</option>
              <option>Italy</option>
              <option>Latvia</option>
              <option>Lithuania</option>
              <option>Spain</option>
              <option>UK</option>
            </select>
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
