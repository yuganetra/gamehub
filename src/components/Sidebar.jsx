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

    <div className="sidebar">
      <ul className="menu-bar">
      <li className="side-links">
               <a href="#">
                 <span className="icons">
                   <BiHomeAlt />
                 </span>
                 <span className="text nav-text">Home</span>
               </a>
             </li>
        <li className="side-links">
            <a href="#">
                 <span className="icons">
                 <SiGamejolt />
               </span>
                <span className="text side-text">Games</span>
              </a>
           </li>

            <li className="side-links">
             <a href="#">
               <span className="icons">
                 <PiTelevision />
               </span>
                <span className="text side-text">Streams</span>
             </a>
            </li>

           <li className="side-links">
              <a href="#">
                <span className="icons">
                 <FiSettings />
               </span>
               <span className="text side-text">Settings</span>
              </a>
           </li>
            <li className="side-links">
             <a href="#">
                <span className="icons">
                 <IoIosChatboxes />
               </span>
               <span className="text side-text">Help</span>
             </a>
           </li>
      </ul>
    </div>

  
  
  );
};
export default Header;
