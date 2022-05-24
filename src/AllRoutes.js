import React, { useEffect } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';

import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Projects from './pages/projects/Projects';

const AllRoutes = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate('/login');
        } else {
            navigate(window.location.pathname + window.location.search);
        }
    }, [localStorage.getItem("token")]);

    return (
        <div>
            {localStorage.getItem("token") && 
            <div className="content-wrapper">
                <Routes>
                    <Route exact path="/" element={<Dashboard />} /> 
                    <Route path="/projects" element={<Projects />} /> 
                </Routes>
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