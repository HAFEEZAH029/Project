import Header from "./Header";
import Footer from "./Footer";

const Details = () => (
    <section className="about_section">
      <div className="about_restaurant">
        <div className="about-little-lemon">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p> Located in chicago, little lemon is re-knowned for its deliberate dishes made from fresh, local
                ingredients. Offering a cozy ambience and attentive service, it is an ideal destination for casual
                dining or memorable gatherings. Enjoy delicious cuisine and delightful moments.
                An experience you will never forget!
            </p>
        </div>
        <div className="table_space">
            <img src="./Images/table 1.jpg" alt="table of four in a hall" class="table_four"/>
            <img src="./Images/table2.jpg" alt="fancy tables in a hall" class="fancy_table"/>
        </div>
      </div>
    </section>
);

export default function About () {

    return (
        <>
          <Header />

          <main>
            <Details />
          </main>

          <Footer />
        </>
    )
}