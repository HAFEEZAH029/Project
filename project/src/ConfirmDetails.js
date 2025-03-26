

export default function ConfirmDetails ({reservationDetails, details, date, setConfirmSwap, setSuccessMessage}) {

     const {indoorOutdoor, time, diners, occasion} = reservationDetails;
     const {firstname, lastname, email, pnumber, message} = details;


     const handleMakeChange = () => {
           setConfirmSwap(false);
     };

     const handleSuccessMessage = () => {
         setConfirmSwap(false);
         setSuccessMessage(true);
     };

    return (
        <>
           <div className="user-details-container">
              <h2>Please confirm your details</h2>
              <div className="user_details">
                <p>Date: {date}</p>
                <p>First Name: {firstname}</p>
                <p>Time: {time}</p>
                <p>Last Name: {lastname}</p>
                <p>No. of diners: {diners}</p>
                <p>Email: {email} </p>
                <p>Occasion: {occasion}</p>
                <p>Phone Number: {pnumber}</p>
                <p>Table Sitting: {indoorOutdoor}</p>
                <p>Request: {message}</p>
              </div>
              <button className="make_changes" onClick={handleMakeChange}>make changes</button>
              <button className="complete_process" onClick={handleSuccessMessage}>Proceed to complete reservation</button>
           </div>
        </>
    );
};