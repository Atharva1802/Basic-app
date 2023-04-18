import SideBar from "./SideBar"
import { BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
                  
        <ul className="sidebar">
          
          <li><span><i className="Home"></i></span><span>Home</span></li>
          <li><span><i className="Contact"></i></span><span>Users</span></li>
          <li><span><i className="About"></i></span><span>Settings</span></li>
        </ul>
        
        <div className="content">
          
        </div>
          </div>
    </BrowserRouter>
  );
}

export default App;
