import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home () {

    const Hero = () => (
        <section className="hero">
            <div className="about">
                <h2>Little lemon</h2>
                <h3>Chicago</h3>
                <p>We are family owned mediterranean restaurant, focused on traditional recipes
                   served with a modern twist
                </p>
                <Link to="/reservations" className="hero_link">
                    <button className="hero_btn">Reserve a Table</button>
                </Link>
            </div>
            <div className="about_img">
                <img src="./Images/sushi.jpg" alt="waiter holding a tray of sushi" />
            </div>
        </section>
    )
    return (
        <>
          <Header />
           <main>
             <Hero />
           </main>
          
          <Footer />
        </>
    )
}

export default Home;