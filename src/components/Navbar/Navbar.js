import React from "react";
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';


// We use JSX curly braces to evaluate the style object on the JSX tag

const Navbar = () => {
return (
    <div className="fullNavbar">
    <header>
    <h1>Evelyn Maldonado</h1>
    
    <nav className="">
        <div>
        <ul className="responsive">
            <li>
                <Link to="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link to="/projects">
                    <a>Projects</a>
                </Link>
            </li>
            <li>
                <Link to="/resume">
                    <a>Resume</a>
                </Link>
            </li>
            <li>
                <Link to ="/contact-info">
                    <a> Contact</a>   
                </Link>
            </li>
        </ul>
        </div>
        {/* <div>
        <div>
        <a class="navbar-brand responsive2" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
        <li class="nav-item active">
        <Link to="/">
        <a class="nav-link">Home <span class="sr-only">(current)</span></a>
        </Link>
        </li>
        <li class="nav-item">
        <Link to="/projects">
        <a class="nav-link">Projects</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link to="/resume">
        <a class="nav-link">Resume</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link to="/contact-info">
        <a class="nav-link"> Contact</a>
        </Link>
        </li>
        </ul>
        </div>
        </div> */}
    </nav>
    </header>
    <nav className="photo1">
        <figure className="photo1" role="img" aria-label="Work space"></figure>
        <img src={require("../../assets/image.jpg").default} alt="pp" width = "15%"/>
    </nav>
    </div>
);
}

export default Navbar;
