import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="container-signup">
      <div className="container-form-signup">
        <div className="container-logo-signup">
          <Link to="/">
            <img
              className="logo-signup"
              src={require("../assets/logo.png")}
              alt="Logo"
            />
            
          </Link>
        </div>
        <h2 className="signup-title">Sign Up</h2>
        <div className="divider-signup"></div>
        <form className="form-signup">
          <div>
            <input
              className="input-signup Email-sign-up"
              type="text"
              placeholder="E-mail"
            />
          </div>
          <div>
            <input
              className="input-signup password-signup"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              className="input-signup password-signup"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              className="input-signup password-signup"
              type="text"
              placeholder="Password"
            />
          </div>
          <div className="container-btn-signup">
            <Link to="/login">
              <input className="btn-signup" type="button" value="Sign up" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}