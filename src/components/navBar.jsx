import React from 'react';
import '../css/navResponsiveContent.css';
function NavBar () {
    return (
        <header className="navheader">
            <nav className="navbox">
                <a href="./" className="navlogo" aria-label="openmenu">CRUD App</a>
            </nav>
        </header>
    );
}
export default NavBar;