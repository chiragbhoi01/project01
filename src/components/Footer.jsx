import React from 'react';
import brandLogo from "../assets/image/Miss-Gypsy-Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="bg-orange-300 p-4 md:p-6 flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto items-center">
            <div id="brandLogo" className='h-auto w-80 flex flex-col items-center justify-center mb-4 md:mb-0 mx-2'>
                <img src={brandLogo} alt="Brand Logo" className="w-32 h-auto" />
                <p className='mt-1 text-center text-[#5B5B5B] text-sm md:text-base'>
                    Discover the beauty of unique, handcrafted jewelry that tells your story
                </p>
            </div>
            <div id="ourDetails" className='flex flex-col justify-center items-center mb-4 md:mb-0 mx-2'>
                <h3 className='text-lg font-semibold text-[#5B5B5B]'>Our Details</h3>
                <div className='flex items-center mt-1'>
                    <FontAwesomeIcon icon={faPhone} className='mr-2' style={{ color: '#906F57' }} />
                    <span className='text-[#5B5B5B] text-sm md:text-base'>+1 (234) 567-890</span>
                </div>
                <div className='flex items-center mt-1'>
                    <FontAwesomeIcon icon={faEnvelope} className='mr-2' style={{ color: '#906F57' }} />
                    <span className='text-[#5B5B5B] text-sm md:text-base'>info@missgypsy.com</span>
                </div>
                <div className='flex items-center mt-1'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2' style={{ color: '#906F57' }} />
                    <span className='text-[#5B5B5B] text-sm md:text-base'>1234 Jewelry Lane, City, State, ZIP</span>
                </div>
            </div>
            <div id="socialMedia" className='flex flex-col justify-center items-center mx-2'>
                <h3 className='text-lg font-semibold text-[#5B5B5B]'>Follow Us</h3>
                <div className='flex space-x-4 mt-2'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className='hover:text-blue-600 transition duration-300'>
                        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#906F57' }} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className='hover:text-pink-600 transition duration-300'>
                        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#906F57' }} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className='hover:text-red-600 transition duration-300'>
                        <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: '#906F57' }} />
                    </a>
                </div>
            </div>

        </footer>
    );
}

export default Footer;