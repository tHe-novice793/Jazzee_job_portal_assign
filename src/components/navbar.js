import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/student-profile">Student Profile</Link></li>
                <li><Link to="/employer-profile">Employer Profile</Link></li>
                <li><Link to="/university-profile">University Profile</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
