import React from 'react';
import BrandLogo from "../assets/image/Miss-Gypsy-Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-white p-6 md:p-10 flex flex-col md:flex-row justify-between max-w-screen mx-auto items-center space-y-8 md:space-y-0">
      {/* Brand Logo and Description */}
      <div id="brandLogo" className="flex flex-col items-center justify-center mb-4 md:mb-0 mx-4 text-center">
        <img src={BrandLogo} alt="Brand Logo" className="w-32 h-auto mb-3" />
        <p className="text-sm md:text-base ">
          Discover the beauty of unique, handcrafted jewelry that tells your story
        </p>
      </div>
      
      {/* Contact Information */}
      <div id="ourDetails" className="flex flex-col justify-center items-center mb-4 md:mb-0 mx-4">
        <h3 className="text-lg font-semibold  mb-4">Our Details</h3>
        <div className="flex items-center mt-1 space-x-3">
          <FontAwesomeIcon icon={faPhone} className="text-[#906F57]" />
          <span className=" text-sm md:text-base">+1 (234) 567-890</span>
        </div>
        <div className="flex items-center mt-2 space-x-3">
          <FontAwesomeIcon icon={faEnvelope} className="text-[#906F57]" />
          <span className=" text-sm md:text-base">info@missgypsy.com</span>
        </div>
        <div className="flex items-center mt-2 space-x-3">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#906F57]" />
          <span className=" text-sm md:text-base">1234 Jewelry Lane, City, State, ZIP</span>
        </div>
      </div>
      
      {/* Social Media Links */}
      <div id="socialMedia" className="flex flex-col justify-center items-center mx-4">
        <h3 className="text-lg font-semibold  mb-4">Follow Us</h3>
        <div className="flex space-x-6">
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            className="hover:text-blue-400 transition duration-300 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#906F57' }} />
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="hover:text-pink-400 transition duration-300 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#906F57' }} />
          </a>
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="YouTube"
            className="hover:text-red-400 transition duration-300 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: '#906F57' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;