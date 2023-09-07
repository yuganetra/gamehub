import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { SiGamejolt } from "react-icons/si";
import { PiTelevision } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { IoIosChatboxes } from "react-icons/io";

const Sidebar = () => {
  return (

    <div className="sidebar">
      <ul className="menu-bar">
        <li className="side-links">
          <a href="#">
            <span className="icons">
              <BiHomeAlt />
            </span>
          </a>
        </li>
        <li className="side-links">
          <a href="#">
            <span className="icons">
              <SiGamejolt />
            </span>
          </a>
        </li>

        <li className="side-links">
          <a href="#">
            <span className="icons">
              <PiTelevision />
            </span>
          </a>
        </li>

        <li className="side-links">
          <a href="#">
            <span className="icons">
              <FiSettings />
            </span>
          </a>
        </li>
        <li className="side-links">
          <a href="#">
            <span className="icons">
              <IoIosChatboxes />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
