import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Reservations () {

    const Banner = () => (
        <section className="banner">
            <div className="invite">
                <h1>Step into a world of culinary delights</h1>
            </div>
            <div className="invite_info">
                <p>
                    Indulge in an unforgettable dining experience at little
                    lemon. Whether it's a romantic dinner, a family gathering, or a special
                    celebration, we're here to make every moment memorable.
                </p>
            </div>
        </section>
    )
    return (
        <>

          <Header />

          <main>
             <Banner />
          </main>

          <Footer />
        </>
    )
}

export default Reservations;