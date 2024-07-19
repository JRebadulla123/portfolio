import React from "react";
import "./page.css";
import { Helmet } from "react-helmet";

const Header = () => {
  return (
    <div className="header-container">
      <Helmet>
        <title>Jellian Rebadulla</title>
      </Helmet>

      <button>
        <span>01. </span>About
      </button>
      <button>
        <span>02. </span>experience
      </button>
      <button>
        <span>03. </span>Projects
      </button>
      <button>
        <span>04. </span>Contact
      </button>
    </div>
  );
};

export default Header;
