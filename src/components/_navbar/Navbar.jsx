import React from "react";
import logo from '../../assets/icon/HatchfulExport-All/logo_transparent1.png';

const Navbar = () => {
    return (
        <nav>
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
                    <li>games</li>
                    <li>about</li>
                    <li>team</li>
                    <li>temp</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;