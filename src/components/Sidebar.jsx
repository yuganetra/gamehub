import React from "react";
import { PiGameControllerLight, PiGearLight } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { AiOutlineMessage, AiOutlineHome } from "react-icons/ai";
import { SlPower } from "react-icons/sl";
import { AiFillGitlab } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (

    <div className="sidebar">
      <ul className="menu-bar">

        <li title="Home" className="side-links home">
          <Link to={"/"}>
            <span className="icons">
              <AiOutlineHome />
            </span>
          </Link>
        </li>

        <li title="Profile" className="side-links home">
          <Link to={"/Profile"}>
            <span className="icons">
              <AiFillGitlab />
            </span>
          </Link>
        </li>

        <li title="Games" className="side-links game">
          <Link to={"/Games"}>
            <span className="icons">
              <PiGameControllerLight />
            </span>
          </Link>
        </li>

        <li title="Stream" className="side-links stream">
          <Link to={"/Steam"}>
            <span className="icons">
              <CiStreamOn />
            </span>
          </Link>
        </li>

        <li title="Messages" className="side-links message">
          <Link to={"/Messages"}>
            <span className="icons">
              <AiOutlineMessage />
            </span>
          </Link>
        </li>

        <li title="Setting" className="side-links setting">
          <Link to={"/Settings"}>
            <span className="icons">
              <PiGearLight />
            </span>
          </Link>
        </li>
      </ul>

      <ul className="login-container">
        <li title="Login" className="side-links login">
          <Link to={"/Signup"}>
            <span className="icons">
              <SlPower />
            </span>
          </Link>
        </li>
      </ul>

    </div>
  );
};
export default Sidebar;
