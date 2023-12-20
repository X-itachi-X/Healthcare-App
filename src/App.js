import React from 'react';
import { FaBeer } from "react-icons/fa";
function App() {
  return (
    <div className="flex h-screen bg-gray-800">
      {/* Left Sidebar */}
      <div className="flex-shrink-0 w-16 bg-gray-900">
        {/* Your navigation links/icons go here */}
        <p className="text-white text-lg p-2"><FaBeer /></p>
        <a href="#" className="text-white block p-2 hover:bg-gray-700">
          Link 1
        </a>
        <a href="#" className="text-white block p-2 hover:bg-gray-700">
          Link 2
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
