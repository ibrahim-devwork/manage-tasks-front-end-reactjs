import React, { useEffect } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Login from './pages/login/Login';

const AllRoutes = () => {

    const navigate = useNavigate();
    
    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate('/login');
        }
    }, []);

    return (
        <div>
             {localStorage.getItem("token") && 
                <div className="content-wrapper">
                    <Routes>
                    {/* <Route exact path="/" element={<Home />} /> */} 
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