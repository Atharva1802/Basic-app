import React from "react";
import { Link } from 'react-router-dom'
// import MenuIcon from '@mui/icons-material/Menu';s
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

const SideBar = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    {/* <MenuIcon /> */}
                </li>
                <li>
            <Link to="/">Home </Link>

                </li>
                <li>
            
            <Link to ="About">about  </Link>

                </li>
                <li>
            <Link to="Contact">contact </Link>


                </li>

            </ul>

        </nav>

    )
    
}

export default SideBar;


// Cards 