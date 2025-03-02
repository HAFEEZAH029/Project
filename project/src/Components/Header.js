import React from "react";

function Header () {
    return (
    <header className="header">
        <img src="./Images/Logo.svg" alt="" className="header_img"/>
        <nav className="header_nav">
            <ul>
                <li><a href="/" className="anc">Home</a></li>
                <li><a href="/" className="anc">About</a></li>
                <li><a href="/" className="anc">Contacts</a></li>
                <li><a href="/" className="anc">Products</a></li>
                <li><a href="/" className="anc">Order online</a></li>
                <li><a href="/" className="anc">Login</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;