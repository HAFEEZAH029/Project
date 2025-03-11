import React from "react";
import { Link } from 'react-router-dom';
import {FaInstagram, FaFacebook, FaTiktok} from 'react-icons/fa'

function Footer () {
    return (
        
    <footer className="footer">
        <img src="./Images/Logo.svg" alt="little lemon logo" className="foot_img"/>
        <nav className="footer_nav">
            <ul>
                <li className="foot_list">
                    <Link to="/" className="foot_anc">Home</Link>
                </li>
                <li className="foot_list">
                    <Link to="/about" className="foot_anc">About</Link>
                </li>
                <li className="foot_list">
                    <Link to="/menu" className="foot_anc">Menu</Link>
                </li>
                <li className="foot_list">
                    <Link to="/reservations" className="foot_anc">Reservations</Link>
                </li>
                <li className="foot_list">
                    <Link to="/orderonline" className="foot_anc">Order online</Link>
                </li>
                <li className="foot_list">
                    <Link to="/login" className="foot_anc">Login</Link>
                </li>
            </ul>
        </nav>
        <div className="Contact">
            <h3>Contact</h3>
            <p>616 Oakmound Road, Illinois, Chicago</p>
            <p>Littlelemonres@gmail.com</p>
            <p>773-502-2700</p>
        </div>
        <nav className="foot_nav">
              <a href="https://www.instagram.com">
               <FaInstagram className="icons instagram"/>
              </a>
              <a href="https://www.facebook.com">
               <FaFacebook className="icons facebook"/>
              </a>
              <a href="https://www.tiktok.com">
               <FaTiktok className="icons tiktok"/>
              </a>
        </nav>
    </footer>
    )
}

export default Footer;