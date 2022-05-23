import React from 'react';
import {NavLink} from 'react-router-dom';
import { userLogout } from '../store/auh/authActions';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(userLogout());
    }

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">
                {/* <img src="http://www.mavistro.com/assets/images/logo.png" alt="AdminLTE Logo" calassName="brand-image img-circle elevation-3" style={{ opacity : ".9", width : "100px" }}/> */}
                <span className="brand-text font-weight-light"> MAVISTRO </span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="img User" />
                    </div>
                    <div className="info">
                        {localStorage.getItem("username") && <a className="d-block" href="/">{localStorage.getItem("username")}</a>}
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <NavLink to="/profile" className="nav-link">
                                <i className="nav-icon fas fa-user"></i>
                                <p>Pofile</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/users" className="nav-link">
                                <i className="nav-icon fas fa-users"></i>
                                <p>Users</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link">
                                <i className="nav-icon fas fa-file-powerpoint"></i>
                                <p>Projects</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/tasks" className="nav-link">
                                <i className="nav-icon fas fa-list"></i>
                                <p>Tasks</p>
                            </NavLink>
                        </li>
                        <hr />
                        <li className="nav-item">
                            <NavLink onClick={handleLogout} to="/login" className="nav-link">
                                <i className="nav-icon fas fa-power-off"></i>
                                <p>Logout</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </aside>
    );
}

export default Sidebar;