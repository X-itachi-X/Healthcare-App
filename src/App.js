import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { FaRegHospital  } from "react-icons/fa";
import Account from './components/account';
import Appointments from './components/appointments';
import Chat from './components/chat';
import Payment from './components/payment';
import Schedule from './components/schedule';
function App() {
  return (
    <div className="flex h-screen bg-gray-600">
      {/* Left Sidebar */}
      <div className="flex-shrink-0 w-60 bg-gray-800 text-center">
        {/* Your navigation links/icons go here */}
        <p className="text-white text-lg m-8 flex justify-around"><FaRegHospital className='w-10 h-10'/>XYZ HealthCare</p>
        <a href="#" className="text-white block p-2 hover:bg-gray-700 mt-8">
          Home
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700 mt-3">
          Account
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700 mt-3">
          Chat
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700 mt-3">
          Appointments
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700 mt-3">
          Schedule
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700 mt-3">
          Payment
        </a>
        
        {/* Add more links/icons as needed */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Your main content goes here */}
        <h1 className="text-2xl font-bold text-white">Welcome to My App</h1>
        <p className="text-white mt-2">This is the main content area.</p>
      </div>
    </div>
  );
}

export default App;
