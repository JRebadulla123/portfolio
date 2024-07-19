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
          <GithubOutlined style={{ fontSize: "32px" }} />
        </div>
        <div className="icon-item">
          <FacebookOutlined style={{ fontSize: "32px" }} />
        </div>
        <div className="icon-item">
          <LinkedinOutlined style={{ fontSize: "32px" }} />
        </div>
        <div className="icon-item">
          <InstagramOutlined style={{ fontSize: "32px" }} />
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
