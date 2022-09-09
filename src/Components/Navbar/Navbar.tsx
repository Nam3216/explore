import  React from "react"
import {Link} from "react-router-dom"
import "./styleNavbar.css"

const Navbar=()=>{


    return(
        <div className="navbar">
            <ul>
                <Link to="/"><li><a>Home</a></li></Link>
                <Link to="/trips"><li><a>Paquetes</a></li></Link>
                <Link to="/excursions"><li><a>Excursions</a></li></Link>
                <Link to="/experiences"><li><a>Experiences</a></li></Link>
                <Link to="/aboutus"><li><a>About Us</a></li></Link>
                <Link to="/contact"><li><a>Contact</a></li></Link>
            </ul>
        </div>
    )
}

export default Navbar

