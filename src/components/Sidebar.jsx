import React from "react"; 
import { PiGameControllerLight, PiGearLight } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { AiOutlineMessage, AiOutlineHome } from "react-icons/ai";
import { SlPower } from "react-icons/sl";
import {AiFillGitlab} from "react-icons/ai";
// import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  // const navigate = useNavigate();

  // const navigateToSignUp = ()=>{
  //   navigate('/Signup');
  // }
  return (

    <div className="sidebar">
      <ul className="menu-bar">

        <li title="Home" className="side-links home">
          <a href="/" >
            <span className="icons">
              <AiOutlineHome />
            </span>
          </a>
        </li>

        <li title="Profile" className="side-links home">
          <a href="/Profile" >
            <span className="icons">
              <AiFillGitlab />
            </span>
          </a>
        </li>

        <li title="Games" className="side-links game">
          <a href="/Games">
            <span className="icons">
              <PiGameControllerLight />
            </span>
          </a>
        </li>

        <li title="Stream" className="side-links stream">
          <a href="/Stream">
            <span className="icons">
              <CiStreamOn />
            </span>
          </a>
        </li>

        <li title="Messages" className="side-links message">
          <a href="/Messages">
            <span className="icons">
              <AiOutlineMessage />
            </span>
          </a>
        </li>

        <li title="Setting" className="side-links setting">
          <a href="/Setting">
            <span className="icons">
              <PiGearLight />
            </span>
          </a>
        </li>

      </ul>

      <ul className="login-container">
        <li title="Login" className="side-links login">
        <a href="/Signup">
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
