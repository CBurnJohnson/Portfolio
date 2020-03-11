import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>
                <Link to='/'>Cole Johnson</Link>
            </h1>
            <ul>
                <li>
                    <Link to='/projects'>Projects</Link>
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
