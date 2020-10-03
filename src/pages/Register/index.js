import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logo from "../../assets/logo.png";

const Register = () => {
  return (
    <>
      <div className="fluid-container">
        <div className="container">
          <div className="register-wrapper">
            <div className="presentation-wrapper">
              <img src={logo} alt="logo" className="logo-presentation" />
              <h1>Faça seu registro no DevHelper!</h1>
            </div>
            <div className="form-wrapper">
              <form action="/" method="POST">
                <div className="form-group">
                  <input
                    name="email"
                    type="text"
                    id="email"
                    aria-label="email"
                    placeholder="Nome de usuário ou e-mail"
                  />
                  <input
                    name="password"
                    type="password"
                    id="password"
                    aria-label="password"
                    placeholder="Senha"
                  />
                  <input
                    name="confirm-password"
                    type="password"
                    id="confirm-password"
                    aria-label="password"
                    placeholder="Confirme senha"
                  />
                  <button type="submit" className="submit-btn">
                    Cadastrar-se
                  </button>
                  <div className="register-link-wrapper">
                    <Link to="/login">Voltar para Login</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
