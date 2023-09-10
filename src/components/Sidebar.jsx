import React from "react";
import { PiGameControllerLight, PiGearLight } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { AiOutlineMessage, AiOutlineHome } from "react-icons/ai";
import { SlPower } from "react-icons/sl"

const Sidebar = () => {
  return (

    <div className="sidebar">
      <ul className="menu-bar">

        <li title="Home" className="side-links home">
          <a href="#" >
            <span className="icons">
              <AiOutlineHome />
            </span>
          </a>
        </li>

        <li title="Games" className="side-links game">
          <a href="#">
            <span className="icons">
              <PiGameControllerLight />
            </span>
          </a>
        </li>

        <li title="Stream" className="side-links stream">
          <a href="#">
            <span className="icons">
              <CiStreamOn />
            </span>
          </a>
        </li>

        <li title="Messages" className="side-links message">
          <a href="#">
            <span className="icons">
              <AiOutlineMessage />
            </span>
          </a>
        </li>

        <li title="Setting" className="side-links setting">
          <a href="#">
            <span className="icons">
              <PiGearLight />
            </span>
          </a>
        </li>

      </ul>

      <ul className="login-container">
        <li title="Login" className="side-links login">
          <a href="#">
            <span className="icons">
              <SlPower />
            </span>
          </a>
        </li>
      </ul>

    </div>
  );
};
export default Sidebar;
