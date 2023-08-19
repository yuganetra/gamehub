import React from "react";
import logo from '../../assets/icon/HatchfulExport-All/logo_transparent1.png';

const Carousel = () => {
    return (
        <main>
            <div className="navbar">
                <div className="logo">
                    <img className="logo-image" src={logo} alt="logo" />
                    <h1 className="logo-text">
                        game
                        <span>
                            hub
                        </span>
                    </h1>
                </div>

                <ul className="nav-links">
                    <li>Games</li>
                    <li>About</li>
                    <li>Team</li>
                    <li>TEMP</li>
                </ul>
            </div>
        </main>
    )
}

export default Carousel;