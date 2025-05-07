import React, {useReducer, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { updateTimes, initializeTimes } from "../BookingFunction";
import {FaChevronUp, FaChevronDown, FaGlassCheers, FaClock, FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { ValidEmail, ValidFirstname, ValidLastname } from "../RegExp";
import ConfirmDetails from "../ConfirmDetails";
import SuccessMessage from "../SuccessMessage";


const Banner = () => (
    <section className="banner">
        <div className="invite">
            <h1>Step into a world of culinary delights!</h1>
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


const Formone = ({availableTimes, date, dateChange, reservationDetails, onDetailsChange}) => {

    const today = new Date().toISOString().split('T')[0];
    const {time, diners, occasion} = reservationDetails;

   return (
   <>
    <section className="bookings">
        <h1>Book a table</h1>
        <form>
            <div className={`radio_container indoor_class`}>
                <label htmlFor="indoor">Indoor sitting</label>
                <div className={`radio-input-container indoor-input-container`}>
                    <input
                     className="indoor_input"
                     type="radio"
                     id="indoor"
                     name="indoorOutdoor"
                     value="indoor"
                     onChange={onDetailsChange}
                    />
                </div>
            </div>

            <div className={`radio_container outdoor_class`}>
                <label htmlFor="outdoor">Outdoor sitting</label>
                <div className={`radio-input-container outdoor-input-container`}>
                    <input
                     className="outdoor_input"
                     type="radio"
                     id="outdoor"
                     name="indoorOutdoor"
                     value="outdoor"
                     onChange={onDetailsChange}
                    />
                </div>
            </div>

            <div className={`field_container date_class`}>
                <label htmlFor="Date">Select Date</label>
                <div className={ date ? "shadow" : "input_container"}>
                    <input
                     className="date_input"
                     type="date"
                     id="Date"
                     name="date"
                     value={date}
                     onChange={dateChange}
                     min={today}
                    />

                    {date  ? (<ShowInputDetails state={date} />) : (<SelectInputDetails icon={<MdDateRange />} text="Select Date" />)}
                </div>
            </div>

            <div className={`field_container diners_class`}>
                <label htmlFor="Diners">No. Of Diners</label>
                <div className={ diners ? "shadow" : "input_container"}>
                    <select
                     className="diners_input"
                     id="Diners"
                     name="diners"
                     value={diners}
                     onChange={onDetailsChange}
                    >
                        <option className="diner_options" value="" disabled >No. of diners</option>
                        <option className="diner_options" value="1 Diner" >1 Diner</option>
                        <option className="diner_options" value="2 Diners" >2 Diners</option>
                        <option className="diner_options" value="3 Diners" >3 Diners</option>
                        <option className="diner_options" value="4 Diners" >4 Diners</option>
                        <option className="diner_options" value="5 Diners" >5 Diners</option>
                        <option className="diner_options" value="6 Diners" >6 Diners</option>
                        <option className="diner_options" value="7 Diners" >7 Diners</option>
                        <option className="diner_options" value="8 Diners" >8 Diners</option>
                        <option className="diner_options" value="9 Diners" >9 Diners</option>
                        <option className="diner_options" value="10 Diners" >10 Diners</option>
                    </select>

                    {diners ? (<ShowInputDetails state={diners} />) : (<SelectInputDetails icon={<FaUser />} text="Select Diners" />)}
                </div>
            </div>

            <div className={`field_container occasion_class`}>
                <label htmlFor="Occasion">Select Occasion</label>
                <div className={ occasion ? "shadow" : "input_container"}>
                    <select
                     className="occasion_input"
                     id="Occasion"
                     name="occasion"
                     value={occasion}
                     onChange={onDetailsChange}
                    >
                        <option className="occasion_options" value="" disabled >Select Occasion</option>
                        <option className="occasion_options" value="Birthday" >Birthday</option>
                        <option className="occasion_options" value="Promotion" >Promotion</option>
                        <option className="occasion_options" value="Engagement" >Engagement</option>
                        <option className="occasion_options" value="Anniversary" >Anniversary</option>
                    </select>

                     {occasion ? (<ShowInputDetails state={occasion} />) : <SelectInputDetails icon={<FaGlassCheers />} text="Select Occasion" />}

                </div>
            </div>

            <div className={`field_container time_class`}>
                <label htmlFor="Time">Select Time:</label>
                <div className={ time ? "shadow" : "input_container" }>
                    <select
                     className="time_input"
                     id="Time"
                     name="time"
                     value={time}
                     onChange={onDetailsChange}
                    >
                        <option className="time_options" value="" disabled >Select time</option>
                        {availableTimes.map((item, index) => (
                            <option className="time_options" key={index} value={item}>{item}</option>
                        ))}
                    </select>

                    {time ? (<ShowInputDetails state={time} />) : (<SelectInputDetails icon={<FaClock />} text="Select Time" />)}
                </div>
            </div>


        </form>
    </section>

    </>
)
}


export const Formtwo = ({reservationDetails, details, onContactsChange, date, errors, successmessage, confirmswap, onSwapping}) => {

    const {time, diners, occasion, indoorOutdoor} = reservationDetails;
    const {message, firstname, lastname, email, pnumber} = details;

    return (
       <>
         <section className={`form2 ${confirmswap || successmessage ? "blurred" : " "}`}>
            <form>
                <div className={`contact Firstname`}>
                    <label htmlFor="fname">FirstName</label>
                    <input type="text" id="fname" name="firstname" value={firstname} onChange={onContactsChange} placeholder="firstname" required />
                    {errors.firstname && <p className="errors_class">{errors.firstname}</p>}
                </div>

                <div className={`contact Lastname`}>
                    <label htmlFor="lname">LastName</label>
                    <input type="text" id="lname" name="lastname" value={lastname} onChange={onContactsChange} placeholder="lastname" required />
                    {errors.lastname && <p className="errors_class">{errors.lastname}</p>}
                </div>

                <div className={`contact Email`}>
                    <label htmlFor="mail">Email</label>
                    <input type="email" id="mail" name="email" value={email} onChange={onContactsChange} placeholder="email" required />
                    {errors.email && <p className="errors_class">{errors.email}</p>}
                </div>

                <div className={`contact Phone`}>
                    <label htmlFor="phone">PhoneNumber</label>
                    <input type="tel" id="phone" name="pnumber" value={pnumber} onChange={onContactsChange} placeholder="phone no." required />
                    {errors.pnumber && <p className="errors_class">{errors.pnumber}</p>}
                </div>

                <div className="form_1_states">
                    <div className="form_1_state_details" onClick={onSwapping}>
                        <div className={`res_states date_state`}>
                            {date ? (
                                <div className="stored_state">
                                  <i className="date_state_icon"><MdDateRange /></i>
                                  <span>{date}</span>
                                </div>
                            ) : (
                                <div className="empty_state">
                                    <i><MdDateRange /></i>
                                    <span>Set Date</span>
                                </div>
                            )}
                        </div>

                        <div className="res_states">
                            {diners ? (
                                <div className="stored_state">
                                  <i className="diners_state_icon"><FaUser /></i>
                                  <span>{diners}</span>
                                </div>
                            ) : (
                                <div className="empty_state">
                                    <i className="diners_state_icon"><FaUser /></i>
                                    <span> Diners</span>
                                </div>
                            )}
                        </div>

                        <div className="res_states">
                            {time ? (
                                <div className="stored_state">
                                  <i className="time_state_icon"><FaClock /></i>
                                  <span>{time}</span>
                                </div>
                            ) : (
                                <div className="empty_state">
                                    <i className="time_state_icon"><FaClock /></i>
                                    <span>Set Time</span>
                                </div>
                            )}
                        </div>

                        <div className="res_states">
                            {occasion ? (
                                <div className="stored_state">
                                  <i className="occasion_state_icon"><FaGlassCheers /></i>
                                  <span>{occasion}</span>
                                </div>
                            ) : (
                                <div className="empty_state">
                                    <i className="occasion_state_icon"><FaGlassCheers /></i>
                                    <span>Occasion</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="sitting_space">
                        <label> {indoorOutdoor} seating</label>
                    </div>
                </div>

                <div className={`contact textarea`}>
                    <label htmlFor="request">Special Request</label>
                    <textarea id="request" name="message" rows={5}  value={message} onChange={onContactsChange} required></textarea>
                    {errors.message && <p className="errors_class">{errors.message}</p>}
                </div>

            </form>
         </section>
       </>
    )
}

function Reservations () {

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [reservationDetails, setReservationDetails] = useState({
        indoorOutdoor : "indoor",
         time: "",
         diners: "",
         occasion: "",
    });
    const [date, setDate] = useState('');
    const [details, setDetails] = useState({
      message: "",
      firstname: "",
      lastname: "",
      email: "",
      pnumber: ""
    });

    const [swap, setSwap] = useState(true);
    const [confirmswap, setConfirmSwap] = useState(false);
    const [successmessage, setSuccessMessage] = useState(false);
    const [errors, setErrors] = useState({});


    const handleContactsChange = (e) => {
        e.preventDefault();
          setDetails((prevContacts) => ({
            ...prevContacts, [e.target.name]: e.target.value}));
    };


    const handleChanges = (e) => {
        e.preventDefault();
        setReservationDetails((prevDetails) => ({...prevDetails, [e.target.name] : e.target.value}));
    };

   const handleDate = (e) => {
       // e.preventDefault();
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({type:'dateChanged', date: newDate});
    };

    const handleSwap = () => {
        setSwap(!swap);
    }

    const handleConfirmswap = () => {
         setConfirmSwap(true);
     };

    const handleResForm = (e) => {
         e.preventDefault();

        if(swap){
            setSwap(false);
            return;
        }

      const {indoorOutdoor, diners, occasion, time} = reservationDetails;
        if (ValidateContactform() && indoorOutdoor && diners && occasion && time && date) {
             handleConfirmswap();

        }
    }

     function ValidateContactform  ()  {

               let newError = {}

          if(!ValidFirstname.test(details.firstname)) {
            newError.firstname = "please input a valid name"
          }

          if(!ValidLastname.test(details.lastname)) {
            newError.lastname = "please input a valid name"
          }

          if(!ValidEmail.test(details.email)) {
            newError.email= "please input a valid email"
          }

          if(!details.pnumber.match(/^\d{11}$/)) {
             newError.pnumber= "please input a valid 11 digit phone number"
          }

          if(details.message.length <= 10) {
             newError.message= "please be detailed in your request"
          }

          setErrors(newError);
          return Object.keys(newError).length === 0;
    };



    return (
        <>

          <Header />

          <main>
            <Banner />

            {(confirmswap || successmessage) && <div className="body_overlay"></div>}

            {confirmswap && (
                 <ConfirmDetails reservationDetails={reservationDetails} details={details} date={date} setConfirmSwap={setConfirmSwap} setSuccessMessage={setSuccessMessage} />
             )}

             {successmessage && (
                <SuccessMessage />
             )}

             { swap ?
              (<Formone
                availableTimes={availableTimes}
                date={date}
                dateChange={handleDate}
                reservationDetails={reservationDetails}
                onDetailsChange={handleChanges}
              /> )  :
              (<Formtwo reservationDetails={reservationDetails} details={details}
              onContactsChange={handleContactsChange} date={date} errors={errors} successmessage={successmessage} confirmswap={confirmswap} onSwapping={handleSwap} />)
            }

            <section className="submit_btn">
                <button type="submit" onClick={handleResForm} className={`${confirmswap || successmessage ? "blurred" : " "}`} aria-label="on click">{ swap ? "Make Reservation" : "Submit Details" }</button>
            </section>

          </main>

          <Footer />
        </>
    )
}


function ShowInputDetails ({state}) {
    return (
    <>
    <div className="chosen">
        <span></span>
        <span>{state}</span>
        <span><FaChevronUp /></span>
    </div>
  </>
    );
};


function SelectInputDetails  ({text, icon})  {

    return (
    <div className="placeholder">
        <span>{icon}</span>
        <span>{text}</span>
        <span><FaChevronDown /></span>
    </div>
    );
};

export default Reservations;

