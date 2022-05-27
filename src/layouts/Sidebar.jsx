import React, {memo, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { userLogout } from '../store/auh/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate        = useNavigate();
    const dispatch        = useDispatch();
    const user            = useSelector(state => state.authSlice);
    const changeUserInfos = useSelector(state => state.profileSlice);
    
    useEffect(() => {
        if(user?.isLogout === true && !localStorage.getItem("token")){
            navigate('/login');
        }
    }, [user]);

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
                        <img src={localStorage.getItem('image')} className="img-circle elevation-2" alt="img User" />
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

                        {/* This routes for Super admin and admin */}
                        {(localStorage.getItem("role") && localStorage.getItem("role") != 3) &&
                        <div>
                        <li className="nav-item">
                            <NavLink to="/users" className="nav-link">
                                <i className="nav-icon fas fa-users"></i>
                                <span>  </span>
                                <p>Users</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link">
                                <i className="nav-icon fas fa-file-powerpoint"></i>
                                <span>  </span>
                                <p>Projects</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/tasks" className="nav-link">
                                <i className="nav-icon fas fa-list"></i>
                                <span>  </span>
                                <p>Tasks</p>
                            </NavLink>
                        </li>
                        </div>}
                        {/* /--- This routes for Super admin and admin ---/ */}
                        
                        <hr />
                        <li className="nav-item">
                            <button onClick={handleLogout}  className="nav-link">
                                <i className="nav-icon fas fa-power-off"></i>
                                <p>Logout</p>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </aside>
    );
}

export default memo(Sidebar);