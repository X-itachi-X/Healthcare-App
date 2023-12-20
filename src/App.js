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
        <a href="#" className="text-white block p-2 hover:bg-gray-700 mt-3">
        <Link to="/account">Account</Link>
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700 mt-3">
        <Link to="/chat">Chat</Link>
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700 mt-3">
        <Link to="/appointments">Appointments</Link>
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700 mt-3">
        <Link to="/schedule">Schedule</Link>
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700 mt-3">
        <Link to="/payment">Payment</Link>
        </a>
        
        {/* Add more links/icons as needed */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Your main content goes here */}
        <Routes>
        <Route exactpath="/" element={<Home />}></Route>
        </Routes>
        <h1 className="text-2xl font-bold text-white">Welcome to My App</h1>
        <p className="text-white mt-2">This is the main content area.</p>
      </div>
    </div>
    </Router>
  );
}

export default App;
