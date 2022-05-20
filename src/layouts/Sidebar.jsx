import React from 'react';

const Sidebar = () => {
    return (
        
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" className="brand-link">
        {/* <img src="http://www.mavistro.com/assets/images/logo.png" alt="AdminLTE Logo" calassName="brand-image img-circle elevation-3" style={{ opacity : ".9", width : "100px" }}/> */}
        <span className="brand-text font-weight-light"> MAVISTRO </span>
    </a>

    <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="img User"/>
            </div>
            <div className="info">
            <a className="d-block" href="/">Ibrahim AOULAD ABDERAH</a>
            </div>
        </div>
    <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>Pofile</p>
                </a>
            </li>
            <li className="nav-item">
                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                <i className="nav-icon fas fa-users"></i>
                <p>Users</p>
                </a>
            </li>
            <li className="nav-item">
                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                <i className="nav-icon fas fa-file-powerpoint"></i>
                <p>Projects</p>
                </a>
            </li>
            <li className="nav-item">
                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                <i className="nav-icon fas fa-list"></i>
                <p>Tasks</p>
                </a>
            </li>
            <hr/>
            <li className="nav-item">
                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                <i className="nav-icon fas fa-power-off"></i>
                <p>Logout</p>
                </a>
            </li>
        </ul>
    </nav>
    </div>

    </aside>
    );
}

export default Sidebar;