import React from "react";
import { AiOutlineArrowRight  } from "react-icons/ai"
import { HiOutlineArrowSmDown } from "react-icons/hi"

const Main = () => {
  return (
    <div className="Main-container">
      {/* Main- carousel */}
      <div className="Main-carousel">
        <div className="main-carousel-container">
          <div className="message-container">
            <div className="message">
              <h2><span className="browse">Browse</span> Through a</h2>
              <h2>Plethora Of <span className="games">Games</span></h2>
              <h2>Just Waiting For</h2>
              <h2>You...</h2>
              <button>Browse Now 
                  <span className="left-arrow"> <AiOutlineArrowRight /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    {/* Cards Section */}
      <div className="cards-container">
        <div className="msgForChutiyas">
          <h2>Please Modify Below<HiOutlineArrowSmDown /> </h2>
        </div>
      </div>
  )
}

export default Main;
