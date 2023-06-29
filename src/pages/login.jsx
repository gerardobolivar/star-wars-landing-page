import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="container-login">
      <div className="container-form">
        <form className="form-login">
          <p className="title-login">Star Wars</p>
          <div>
            <input
              className="input Email-login"
              type="text"
              placeholder="E-mail"
            />
          </div>
          <div>
            <input
              className="input password-login"
              type="text"
              placeholder="Password"
            />
          </div>
          <div className="option-login">
            <div className="container-checkbox">
              <input
                className="checkbox"
                type="checkbox"
                name="Remenber"
                id="Remenber"
              />
              <p>Remenber me</p>
            </div>
            <div className="container-checkbox ">
              <Link to="/recovery" className="option-login-a">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="container-btn">
            <Link to="/">
              <input className="btn-Login" type="button" value="Login" />
            </Link>
            <Link to="/">
              <input className="btn-Login" type="button" value="Sing up" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
