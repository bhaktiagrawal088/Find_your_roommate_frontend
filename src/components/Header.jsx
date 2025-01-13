import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-blue-200 py-4 px-6  shadow-md' >
      <div className="flex justify-between items-center">
        <a href="#" className="flex items-center text-2xl font-bold text-blue-600">
          Roomies
          <img src="src\assets\high-five.png" alt="Roomies Logo" className="w-8 h-8 ml-2" />
        </a>
        <div className="text-lg text-gray-600 font-medium">College Roommate Finder</div>
      </div>

      <div className="flex justify-center space-x-8 mt-4">
        <a href="#testimonials" className="text-gray-700 hover:text-blue-600">
          Testimonials
        </a>
        <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">
          How Roomies Work
        </a>
      </div>

      <div className="flex justify-end space-x-4 mt-2">
      <Link to='/login'>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </Link>
      <Link to='singup'>
        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-100">
          Create an account
        </button>

      </Link>
      </div>
    </div>
  );
};

export default Header;
