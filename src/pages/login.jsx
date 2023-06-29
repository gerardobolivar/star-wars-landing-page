import "./login.css";

export default function Login() {
  return (
    <div className="container-login">
      <div className="container-form">
        <form className="form-login">
          <p className="title-login">Star Wars</p>
          <div>
            <input className="input Email-login" type="text" placeholder="E-mail" />
          </div>
          <div>
            <input className="input password-login" type="text" placeholder="Password" />
          </div>
          <div className="option-login">
            <div className="container-checkbox">
              <input className="checkbox" type="checkbox" name="Remenber" id="Remenber" />
              <p>Remenber me</p>
            </div>
            <div>
              <p>Forgot Password?</p>
            </div>
          </div>
          <input className="btn-Login" type="button" value="Login" />
        </form>
      </div>
    </div>
  );
}
