import React from "react";
import pfp from "../assets/profile/pfp2.png";
import gameplay from "../assets/videos/gameplay.jpeg"
import bg_img from "../assets/carousel/bg.jpg";
import { RiUserAddFill } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsDiscord, BsTwitch } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useFormAction } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile-container">
     
      <div className="header-container">

      <div className="header">
        <div className="profile-section-left">
          <img src={pfp} alt="" />
          <div className="name-id">
            <h2>Player Name</h2>
            <h3>@playerID</h3>

            <div className="connections">
              <div className="connect">
                <div className="icon">
                  <span>
                    <RiUserAddFill />
                  </span>
                </div>
                Connect
              </div>
              <div className="message">
                <div className="icon">
                  <span>
                    <BiMessageAltDetail />
                  </span>
                </div>
                Message
              </div>
            </div>
          </div>
        </div>

        <div className="profile-section-right">
          <div className="link-container">
            <div className="icons">
              <a href="">
                <span><BsDiscord /></span>
              </a>
            </div>
            <div className="icons">
              <a href="">
                <span><BsTwitch /></span>
              </a>
            </div>
            <div className="icons">
              <a href="">
                <span><AiFillTwitterCircle /></span>
              </a>
            </div>
          </div>
        </div>


      </div>
      </div>

      <div className="container">
        
        <div className="left-container">
          <div className="gameplay">

            <h2>Your Gameplay</h2>
            <div className="img-desc">
            <div className="image">
              <img src={gameplay} alt="" /> 
              </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Nomnis iure excepturi,
              voluptate impedit eaque cum ex adipisci reiciendis 
              optio maxime consequatur tenetur accusamus!
            </div>
            </div>
            <div className="img-desc">
            <div className="image">
              <img src={gameplay} alt="" /> 
              </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus eos omnis iure excepturi,
              optio maxime consequatur tenetur accusamus!
            </div>
           
            
            </div>
           
          </div>
        </div>
        <div className="right-container">
          <h2>news</h2>
          <div className="news-container">
            <div className="paragraph">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               nostrum laboriosam modi aspernatur expedita corporis, atque incidunt 
                dolorum doloremque? Quae vero optio, molestias corporis inventore eius!
                </p>
            </div>
            <div className="paragraph">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              modi aspernatur expedita corporis, atque incidunt 
                dolorum doloremque? Quae vero optio, molestias corporis inventore eius!
                </p>
            </div>
            <div className="paragraph">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                corporis, atque incidunt 
                dolorum doloremque? Quae vero optio, molestias corporis inventore eius!
                </p>
            </div>
            <div className="paragraph">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                modi aspernatur expedita corporis, atque incidunt 
                dolorum doloremque? Quae vero optio, molestias corporis inventore eius!
                </p>
            </div>
            <div className="paragraph">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consequatur quis necessitatibus velit nulla, 
                molestias corporis inventore eius!
                </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;
