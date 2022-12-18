import "./NavBar.css"
import logo from "../images/logo.jpg"
import { Link } from "react-router-dom"



const NavBar = () => {

  return (
    <div className="app-bar">

          <img src={logo} alt="logo" className="img-logo"/>
  
          <ul className="links">
            <Link className="home" to="/home">Home</Link>
            <Link className="training" to="/training">Training</Link>
            <Link className="before-after" to="/before&after">Before & After</Link>
            <Link className="contact" to="/contact">Let's Talk</Link>
            
            </ul>      
   
  
    
    
    </div>
  )
}

export default NavBar

