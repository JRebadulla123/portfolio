import React from "react";
import "./page.css";
import logo from "../Img/myLogo.png";
import {
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const Page = () => {
  return (
    <div className="page-container">
      <div className="icons">
        <div className="icon-item">
          <a
            href="https://github.com/JRebadulla123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined className="github" style={{ fontSize: "25px" }} />
          </a>
        </div>
        <div className="icon-item">
          <a
            href="https://www.facebook.com/jellianmarienicolerebadulla23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined
              className="facebook"
              style={{ fontSize: "25px" }}
            />
          </a>
        </div>
        <div className="icon-item">
          <a
            href="https://www.instagram.com/jellianmolera?igsh=Z2g3cHBxNmFhN2Vj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined className="ig" style={{ fontSize: "25px" }} />
          </a>
        </div>
        <div className="icon-item">
          <LinkedinOutlined className="linkin" style={{ fontSize: "25px" }} />
        </div>
        <hr className="separator" /> {/* Separator placed here */}
      </div>
      <div className="content-container">
        <img className="logo" src={logo} alt="Logo" />
        <div className="about-container">
          <div className="content">
            <p className="hi">Hi, my name is</p>
            <h1 className="name">Jellian Rebadulla</h1>
            <h2 className="name">Web Developer</h2>
            <p className="desc">
              Passionate student eager to master web development, blending
              programming skills and design knowledge to create dynamic,
              user-friendly websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
