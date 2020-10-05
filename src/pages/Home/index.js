import React from "react";
import { Link } from "react-router-dom";

import Carousel from "react-elastic-carousel";

import logo from "../../assets/logo.png";
import community from "../../assets/community.svg";
import javascript from "../../assets/javascript.png";

import "./styles.css";

const Home = () => {
  return (
    <div className="fluid-container">
      <header className="header">
        <div className="brand">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <Link to="/login" className="login-btn">
          Login
        </Link>
        <Link to="/register" className="register-btn">
          Sign-up
        </Link>
      </header>
      <div className="hero">
        <div className="txt">
          <h1>
            Conecte-se. Ajude <br />e evolua.
          </h1>
          <h2>No DevHelper, você não está sozinho.</h2>
          <Link to="/" className="entry-btn">
            Embarcar
          </Link>
        </div>
        <div className="img">
          <img src={community} alt="Comunidade" />
        </div>
      </div>
      <div className="carousel">
        <Carousel showArrows={true}>
          <div>
            <img src={javascript} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={javascript} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={javascript} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={javascript} />
            <p className="legend">Legend 1</p>
          </div>
        </Carousel>
      </div>
      <div className="questions">
        aaaaa
      </div>
    </div>
  );
};

export default Home;
