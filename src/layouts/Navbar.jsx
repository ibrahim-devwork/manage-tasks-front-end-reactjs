import React from 'react';

const Navbar = () => {
    return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
        <li className="nav-item">
            <span className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></span>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
            {/* <a href="#" className="nav-link">Home</a> */}
            <span href="#" className="nav-link">Home</span>
        </li>
        </ul>
    </nav>
    );
}

export default Navbar;