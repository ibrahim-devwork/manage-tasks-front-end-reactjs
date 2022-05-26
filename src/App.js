import './App.css';
import React from "react";
import Navbar  from './layouts/Navbar';
import Footer from './layouts/Footer';
import Sidebar from './layouts/Sidebar';
import AllRoutes from './AllRoutes'
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const userData = useSelector((state) => state.authSlice);

  return (
    <BrowserRouter>
      <div className="wrapper">
          {localStorage.getItem("token") && 
            <div>
              <Navbar/>
              <Sidebar/>
            </div>
          }
        <AllRoutes/>
        {localStorage.getItem("token") && 
        <Footer/>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
