import React from "react";
import "../css/navbar.css"
const Navbar = () => {
    return (
        <div className="navBar container">
            <div className="navLogo">
                Developer
            </div>

            <div className="navLinks">
                <a href="/"> Home </a>
                <a href="/"> Projects </a>
                <a href="/"> About me </a>
                <a href="/"> GitHub </a>
            </div>

        </div>
    )
}

export default Navbar