import React from "react";
import { Link } from 'react-router-dom';

function Header () {
    return (
    <header className="header">
        <div className="logo_container">
            <Link to="/">
                 <img src="./Images/Logo.svg" alt="little lemon logo" className="header_img"/>
            </Link>
        </div>
       
        
        <nav className="header_nav">
            <ul className="header_ul">
                <li>
                    <Link to="/" className="anc">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="anc">About</Link>
                </li>
                <li>
                    <Link to="/menu" className="anc">Menu</Link>
                </li>
                <li>
                    <Link to="/reservations" className="anc">Reservations</Link>
                </li>
                <li>
                    <Link to="/orderonline" className="anc">Order online</Link>
                </li>
                <li>
                    <Link to="/login" className="anc">Login</Link>
                </li>
            </ul>
        </nav>


        <img src="./Images/Menu.svg" alt="responsive menu" className="resp_menu"/>
    </header>
    )
}

export default Header;