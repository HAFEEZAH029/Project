import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { MdDeliveryDining, MdStarRate } from "react-icons/md";

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

    const Highlights = () => (
        <section className="highlights">
          <div className="container">
            <div className="intro">
                <h1>This week specials!</h1>
                <Link to="/menu" className="link-to-menu">
                  <button className="menu-btn">Online Menu</button>
                </Link>
            </div>

            <div className="specials">
                <div className="special">
                    <img src="./Images/greeksalad.jpg" alt="greek salad"/>
                    <div className="dish_info">
                        <div className="dish_name">
                            <h4>Greek salad</h4>
                            <p>$12.98</p>
                        </div>
                        <p className="about_dish">
                            The famous greek sala of crispy lettuce, peppers, olives, and our chicago style leta
                             cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <div className="cta">
                            <p className="order">Order delivery</p>
                            <MdDeliveryDining className="order_icon" />
                        </div>
                    </div>
                </div>

                <div className="special">
                    <img src="./Images/bruschi.jpg" alt="bruchetta" />
                    <div className="dish_info">
                        <div className="dish_name">
                            <h4>Bruchetta</h4>
                            <p>$5.99</p>
                        </div>
                        <p className="about_dish">
                            Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned
                             with salt and olive oil.
                        </p>
                        <div className="cta">
                            <p className="order">Order delivery</p>
                            <MdDeliveryDining className="order_icon" />
                        </div>
                    </div>
                </div>

                <div className="special">
                    <img src="./Images/lemondessert.jpg" alt="lemon dessert"/>
                    <div className="dish_info">
                        <div className="dish_name">
                            <h4>Lemon Dessert</h4>
                            <p>$8.00</p>
                        </div>
                        <p className="about_dish">
                            This comes straight from grandma's recipe book. Every last ingredient has been sourced
                             and is as authentic as can be imagined.
                        </p>
                        <div className="cta">
                            <p className="order">Order delivery</p>
                            <MdDeliveryDining className="order_icon" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
    )


    const Testimonials = () => (
        <section className="testimonials">
            <h1>Testimonials</h1>
            <div className="Cards">
                <div className="testimonial">
                    <div className="user">
                        <img src="./Images/Anna.jpg" alt="profile of a user"/>
                        <p className="user_name">Anna</p>
                    </div>
                    <div className="messaging">
                        <p className="review">Review</p>
                        <p className="message">Delicious food served in a cozy ambience. Great Experience!</p>
                        <div className="rating">
                            <p>Rating</p>
                            <small>
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            </small>
                        </div>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="user">
                        <img src="./Images/chris.jpg" alt="user profile"/>
                        <p className="user_name">Chris garry</p>
                    </div>
                    <div className="messaging">
                        <p className="review">Review</p>
                        <p className="message">I really liked that their customer service is efficient.</p>
                        <div className="rating">
                            <p>Rating</p>
                            <small>
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            </small>
                        </div>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="user">
                        <img src="./Images/Ayisha.jpg" alt="profile of a user"/>
                        <p className="user_name">Ayisha</p>
                    </div>
                    <div className="messaging">
                        <p className="review">Review</p>
                        <p className="message">Yummy food, friendly staff, definitely worth trying.</p>
                        <div className="rating">
                            <p>Rating</p>
                            <small>
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            </small>
                        </div>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="user">
                        <img src="./Images/Dan.jpg" alt="user profile"/>
                        <p className="user_name">Dan william</p>
                    </div>
                    <div className="messaging">
                        <p className="review">Review</p>
                        <p className="message">Tasty dish, cozy vibes, highly recommended spot.</p>
                        <div className="rating">
                            <p>Rating</p>
                            <small>
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            <MdStarRate className="star" />
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )


    return (
        <>
          <Header />

           <main>
             <Hero />
             <Highlights />
             <Testimonials />
           </main>

          <Footer />
        </>
    )
}

export default Home;