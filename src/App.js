import React from 'react';
import { FaRegHospital  } from "react-icons/fa";
function App() {
  return (
    <div className="flex h-screen bg-gray-600">
      {/* Left Sidebar */}
      <div className="flex-shrink-0 w-60 bg-gray-800 text-center">
        {/* Your navigation links/icons go here */}
        <p className="text-white text-lg block mt-8"><FaRegHospital className='w-10 h-10'/>XYZ HealthCare</p>
        <a href="#" className="text-white block p-2 hover:bg-gray-700 mt-8">
          Link 1
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700">
          Link 2
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700">
          Link 3
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700">
          Link 4
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700">
          Link 5
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
