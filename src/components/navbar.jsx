import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


function Navbar() {
  return (
        <nav className="flex items-center bg-teal-700 h-20 text-lg">
            <ul className="flex items-center ml-32 max-w-md mx-1 my-1" >
                <li className="mr-6">
                    <a className="text-white hover:text-gray-200" href="#"><img  className="w-12 h-12 max-w-md" src={require('./../logo.png')} /></a>
                </li>
                <li className="mr-6">
                    <a className="text-white hover:text-gray-200" href="#">Home</a>
                </li>
                <li className="mr-6">
                    <a className="text-white hover:text-gray-200" href="#">Past Webinars</a>
                </li>
                <li className="mr-6">
                    <FontAwesomeIcon icon={faFacebook} color={'white'} size={'lg'}/>
                </li>
                <li className="mr-6">
                    <FontAwesomeIcon icon={faInstagram} color={'white'} size={'lg'}/>
                </li>
            </ul>
        </nav>
  );
}

export default Navbar;