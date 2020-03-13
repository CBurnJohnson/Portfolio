import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    const onClick = e => {};

    return (
        <nav className="navbar">
            <h1>
                <Link to="/">Cole Johnson</Link>
            </h1>
            <ul>
                <li>
                    <Link
                        activeClassName="navbar-active"
                        onClick={onClick}
                        to="/projects"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        activeClassName="navbar-active"
                        onClick={onClick}
                        to="/resume"
                    >
                        Resume
                    </Link>
                </li>
                <li>
                    <a onClick={onClick} href="#projects">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
