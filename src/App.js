import './App.css';
import React, { useEffect } from "react";
import Navbar  from './layouts/Navbar';
import Footer from './layouts/Footer';
import Sidebar from './layouts/Sidebar';
import AllRoutes from './AllRoutes'
import {BrowserRouter} from 'react-router-dom';

function App() {
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
