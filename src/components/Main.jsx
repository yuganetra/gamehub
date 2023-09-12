import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import img1 from "../assets/cards/dota-2.jpg";
import img2 from "../assets/cards/winter-3.jpg";
import img3 from "../assets/cards/rdr-2.jpg";
import img4 from "../assets/cards/pubg.jpg";
import img5 from "../assets/cards/fortnite.jpg";
import img6 from "../assets/cards/far-cry-5.jpg";

const Main = () => {
  return (
    <div className="Main-container">
      {/* Main- carousel */}
      <div className="Main-carousel">
        <div className="main-carousel-container">
          <div className="message-container">
            <div className="message">
              <h2>
                <span className="browse">Browse</span> Through a
              </h2>
              <h2>
                Plethora Of <span className="games">Games</span>
              </h2>
              <h2>Just Waiting For</h2>
              <h2>You...</h2>
              <button>
                Browse Now
                <span className="left-arrow">
                  {" "}
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Cards Section */}
      <div className="cards-container">

        <div className="TR-game-section">
          <h2 className="line-title">trending games</h2>
          <div className="games-carousel">


            <div className="item first-item">
              <div className="img-container">
                <img src={img1} alt=""/>
              </div>
              <div className="item-desc">
                <h3>Dota 2</h3>
                <p>
                  Dota 2 is a multiplayer online battle arena by Valve. The game
                  is a sequel to Defense of the Ancients, which was a
                  community-created mod for Blizzard Entertainment's Warcraft
                  III.
                </p>
              </div>
              <div className="play-btn">
                <button>play now</button>
              </div>
            </div>

            <div className="item ">
              <div className="img-container">
                <img src={img2} alt=""/>
              </div>
              <div className="item-desc">
                <h3>Witcher -2</h3>
                <p>
                  Dota 2 is a multiplayer online battle arena by Valve. The game
                  is a sequel to Defense of the Ancients, which was a
                  community-created mod for Blizzard Entertainment's Warcraft
                  III.
                </p>
              </div>
              <div className="play-btn">
                <button>play now</button>
              </div>
            </div>

            <div className="item ">
              <div className="img-container">
                <img src={img3} alt=""/>
              </div>
              <div className="item-desc">
                <h3>RDR -2</h3>
                <p>
                  Dota 2 is a multiplayer online battle arena by Valve. The game
                  is a sequel to Defense of the Ancients, which was a
                  community-created mod for Blizzard Entertainment's Warcraft
                  III.
                </p>
              </div>
              <div className="play-btn">
                <button>play now</button>
              </div>
            </div>

            <div className="item ">
              <div className="img-container">
                <img src={img4} alt=""/>
              </div>
              <div className="item-desc">
                <h3>PUBG</h3>
                <p>
                  Dota 2 is a multiplayer online battle arena by Valve. The game
                  is a sequel to Defense of the Ancients, which was a
                  community-created mod for Blizzard Entertainment's Warcraft
                  III.
                </p>
              </div>
              <div className="play-btn">
                <button>play now</button>
              </div>
            </div>

            <div className="item ">
              <div className="img-container">
                <img src={img5} alt=""/>
              </div>
              <div className="item-desc">
                <h3>Fortnite</h3>
                <p>
                  Dota 2 is a multiplayer online battle arena by Valve. The game
                  is a sequel to Defense of the Ancients, which was a
                  community-created mod for Blizzard Entertainment's Warcraft
                  III.
                </p>
              </div>
              <div className="play-btn">
                <button>play now</button>
              </div>
            </div>

            <div className="item ">
              <div className="img-container">
                <img src={img6} alt=""/>
              </div>
              <div className="item-desc">
                <h3>Far Cry </h3>
                <p>
                  Dota 2 is a multiplayer online battle arena by Valve. The game
                  is a sequel to Defense of the Ancients, which was a
                  community-created mod for Blizzard Entertainment's Warcraft
                  III.
                </p>
              </div>
              <div className="play-btn">
                <button>play now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    .

    </div>
  );
};

export default Main;
