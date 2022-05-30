import React, { useEffect } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';

import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Projects from './pages/projects/Projects';
import Tasks from './pages/tasks/Tasks';
import NotFoundPage from './pages/NotFoundPage';
import Profile from './pages/profile/Profile';
import Users from './pages/users/Users';

const AllRoutes = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate('/login');
        } else {
            if(window.location.pathname + window.location.search === '/login'){
                navigate('/');
            } else {
                navigate(window.location.pathname + window.location.search);
            }
        }
    }, [localStorage.getItem("token")]);

    return (
        <div>
            {localStorage.getItem("token") && 
            <div className="content-wrapper">
                 {(localStorage.getItem("role") && localStorage.getItem("role") != 3) ? 
                 (
                    <Routes>
                        <Route exact path="/" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/users" element={<Users />} /> 
                        <Route path="/projects" element={<Projects />} /> 
                        <Route path="/tasks" element={<Tasks />} /> 
                        {window.location.pathname + window.location.search != '/login' &&
                            <Route path="/*" element={<NotFoundPage />} />
                        }
                    </Routes>
                 ) 
                 : 
                 (
                    <Routes>
                        <Route exact path="/" element={<Dashboard />} /> 
                        <Route path="/profile" element={<Profile />} />
                        {window.location.pathname + window.location.search != '/login' &&
                            <Route path="/*" element={<NotFoundPage />} />
                        }
                    </Routes>
                 )}
            </div>
            }
            {!localStorage.getItem("token") && 
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
            }

        </div>
    )
}

export default AllRoutes;