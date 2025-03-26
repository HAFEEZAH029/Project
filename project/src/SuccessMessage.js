import { Link } from "react-router-dom";

export default function SuccessMessage () {
    return (
        <article className="success_message">
            <h2>Your reservation has been successful</h2>
            <p>you will get your reservation details via email</p>
            <Link to="/" className="home-link"><button className="back_btn">back to homepage</button></Link>
        </article>
    )
};