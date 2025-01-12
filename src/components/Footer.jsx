import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 ">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-2 ml-4">
          <img
            src="src\assets\high-five.png"
            alt="Roomies Logo"
            className="w-10 h-10"
          />
          <span className="font-bold text-xl">Roomies</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 m-4">
          <a href="#about" className="hover:underline">
            About Us
          </a>
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#testimonials" className="hover:underline">
            Testimonials
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-4">
        <div className="container mx-auto text-center py-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Roomies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
