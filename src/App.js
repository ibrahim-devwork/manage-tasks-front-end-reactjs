import './App.css';
import Navbar  from './layouts/Navbar';
import Footer from './layouts/Footer';
import Sidebar from './layouts/Sidebar';

function App() {
  return (
    <div className="wrapper">

    <Navbar/>
    <Sidebar/>
    <div className="content-wrapper">
      
    </div>
    <Footer/>
 
    </div>
  );
}

export default App;
