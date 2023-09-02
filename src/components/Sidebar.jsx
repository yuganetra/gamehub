import React from "react";
import logo from "../assets/icon/logo.png";
import { AiOutlineBars } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { SiGamejolt } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { PiTelevision } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { IoIosChatboxes } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Header = () => {
  return (
    <nav className="sidebar">
      <header>
        <div className="image-text">
          <span className="image">
            <img src={logo} alt="logo" />
          </span>
          <div className="header-text">
            <span className="name">Game Hub</span>
          </div>
        </div>
        <span className="toggle">
          <AiOutlineBars />
        </span>
      </header>

      <div className="profile" id="trapezoid">
        <span className="pf-icon">
          <CgProfile />
        </span>
        <div className="details">
          <div className="player">
            <span className="pf-name">Yuvraj</span>
            <span className="pf-location">jabalpur</span>
          </div>
          <div className="level-container">
            <div className="p-level">
              <span className="pf-level">level </span>
              <span className="pf-level level">0</span>
            </div>

            <div className="p-points">
              <span className="pf-points">Points</span>
              <span className="points">0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-bar">
        <div className="menu">
            <h1>Menu</h1>
          <ul className="menu-links">
            <li className="nav-links">
              <a href="#">
                <span className="icons">
                  <BiHomeAlt />
                </span>
                <span className="text nav-text">Home</span>
              </a>
            </li>
            <li className="nav-links">
              <a href="#">
                <span className="icons">
                  <SiGamejolt />
                </span>
                <span className="text nav-text">Games</span>
              </a>
            </li>

            <li className="nav-links">
              <a href="#">
                <span className="icons">
                  <PiTelevision />
                </span>
                <span className="text nav-text">Streams</span>
              </a>
            </li>

            <li className="nav-links">
              <a href="#">
                <span className="icons">
                  <FiSettings />
                </span>
                <span className="text nav-text">Settings</span>
              </a>
            </li>
            <li className="nav-links">
              <a href="#">
                <span className="icons">
                  <IoIosChatboxes />
                </span>
                <span className="text nav-text">Help</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="nav-links">
            <a href="#">
              <span className="icons">
                <RiLogoutBoxRLine />
              </span>
              <span className="text">Logout</span>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};
export default Header;
