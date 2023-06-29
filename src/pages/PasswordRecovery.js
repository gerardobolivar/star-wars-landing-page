import React from "react";
import { Link } from "react-router-dom";
import "./PasswordRecovery.css";

export default function PasswordRecover() {
  return (
    <div className="passwordRecoveryContainer">
      <div className="passwordRecoveryCard">
        <div className="passwordRecoveryCardContent">
          <div className="passwordRecoveryCardHeader">
            <Link to="/">
              <img
                className="logopassrecovery"
                src={require("../assets/logo.png")}
                alt="Logo"
              />
            </Link>
            <h2>Recover Password</h2>
            <div className="passwordRecoveryCardHeaderLine"></div>
          </div>
          <div className="passwordRecoveryCardBody">
            <form>
              <label for="exampleInputEmail1">Your email or username</label>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                />
              </div>
              <button type="submit" className="yellowButton recoveryButton">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
