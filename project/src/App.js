import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Reservations from './Components/Reservations';


function App() {
  
  return (
    < >
        <Router>
           <Routes>
              <Route path='/' element={<Home />}>Home</Route>
              <Route path='/reservations' element={<  Reservations />}>ReservationS</Route>
           </Routes>
        </Router>
    </>
  );
}

export default App;
