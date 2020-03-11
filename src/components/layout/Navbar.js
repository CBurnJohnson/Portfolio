import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>
                <a href='#'>Cole Johnson</a>
            </h1>
            <ul>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#projects'>Resume</a>
                </li>
                <li>
                    <a href='#projects'>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
