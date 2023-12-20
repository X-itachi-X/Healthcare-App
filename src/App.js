import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FaRegHospital  } from "react-icons/fa";
import Account from './components/account';
import Appointments from './components/appointments';
import Chat from './components/chat';
import Payment from './components/payment';
import Schedule from './components/schedule';
import Home from './components/home';
function App() {
  return (
    <Router>
    <div className="flex h-screen bg-gray-600">
      {/* Left Sidebar */}
      <div className="flex-shrink-0 w-60 bg-gray-800 text-center">
        {/* Your navigation links/icons go here */}
        <p className="text-white text-lg m-8 flex justify-around"><FaRegHospital className='w-10 h-10'/>XYZ HealthCare</p>
        <p className="text-white block p-2 hover:bg-gray-700 mt-8">
          <Link to="/">Home</Link>
        </p>
        <p className="text-white block p-2 hover:bg-gray-700 mt-3">
        <Link to="/account">Account</Link>
        </p>
        <p  className="text-white block p-2 hover:bg-gray-700 mt-3">
        <Link to="/chat">Chat</Link>
        </p>
        <p  className="text-white block p-2 hover:bg-gray-700 mt-3">
        <Link to="/appointments">Appointments</Link>
        </p>
        <p  className="text-white block p-2 hover:bg-gray-700 mt-3">
        <Link to="/schedule">Schedule</Link>
        </p>
        <p className="text-white block p-2 hover:bg-gray-700 mt-3">
        <Link to="/payment">Payment</Link>
        </p>
        
        {/* Add more links/icons as needed */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Your main content goes here */}
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/account" element={<Account />}></Route>
            <Route exact path="/chat" element={<Chat />}></Route>
            <Route exact path="/appointments" element={<Appointments />}></Route>
            <Route exact path="/schedule" element={<Schedule />}></Route>
            <Route exact path="/payment" element={<Payment />}></Route>
        </Routes>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
