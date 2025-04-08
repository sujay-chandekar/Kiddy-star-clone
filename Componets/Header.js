"use client";

import React, { useState } from 'react';
import './Header.css';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='nav flex justify-between items-center px-8 p-4 shadow-md fixed w-full z-10 top-0'>
            <div className='logo flex items-center gap-4 text-lg font-semibold'>
                <a href="/" className="flex items-center gap-2">
                    <img src='https://kiddystar.oceanwp.org/wp-content/uploads/2024/02/kiddystar-logo.jpg' alt="Kiddystar Logo" className='kiddystar-logo' />
                </a>
            </div>
            <button className='menu-toggle md:hidden' onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`nav-links ${isMenuOpen ? 'open' : ''} md:flex gap-4 text-lg font-semibold text-gray-800`}> 
                <Link className="nav-a" href="/About">ABOUT US</Link>
                <Link className="nav-a" href="/Resources">RESOURCES</Link> 
                <Link className="nav-a" href="/Creatvity">CREATVITY</Link>
                <Link className="nav-a" href="/Teachers">TEACHERS</Link>
                <Link className="nav-a" href="/Contact">CONTACT US</Link>
            </nav>
        </header>
    );
};

export default Header;