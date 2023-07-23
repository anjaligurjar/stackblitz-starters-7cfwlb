import React, { Link } from "react-router-dom"



export default function Navbar() {
  return (
    <div className="topnav">

         < Link to="/Home" className="Right" ><i className="fa fa-fw fa-home"></i>Home</Link>
          <Link to="/About"><i className="fa fa-fw fa-car-leftside"></i>About</Link>
          <Link to="/contact"> <i className="fa fa-fw fa-envelope"></i>Contact</Link>
          <Link to="/LoginForm" className="right "><i className="fa fa-fw fa-user"></i> LoginForm</Link>
          <Link to="/RegistrationForm" className="right"><i className="fa fa-fw fa-book"></i>Registration_HEre</Link>
          <Link to="/Services" ><i className="fa fa-fw fa-car"></i> Services</Link>
         




    </div>
  )
}