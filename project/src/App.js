import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Reservations from './Components/Reservations';
import About from './Components/About';


function App() {

  return (
    < >
        <Router>
           <Routes>
              <Route path='/' element={<Home />}>Home</Route>
              <Route path='/reservations' element={<  Reservations />}>Reservation</Route>
              <Route path='/about' element={<  About />}>About</Route>
           </Routes>
        </Router>
    </>
  );
}

export default App;
