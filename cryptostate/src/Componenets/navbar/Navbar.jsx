import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {

    const [ showMenu, setShowMenu ] = useState(false);
    return (

        <nav className="navbar m-5 flex justify-between item-center h-16 text-block relative shadow-sm">
            <Link to='/' className="pl-8">
                CryptoState
            </Link>

            <div className="px-4 cursor-pointer md:hidden">
                <a href="#" onClick={() => setShowMenu(!showMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </a>
            </div>

            <div className="pr-8 md:block hidden" >
                <Link to='/' className="pl-8">
                    Home
                </Link>
                <Link to='/properties' className="pl-8">
                    Properties
                </Link>
                <Link to='/about' className="pl-8">
                    About Us
                </Link>
            </div>
           
            
        </nav>

    )
}

export default Navbar
