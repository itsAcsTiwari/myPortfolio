import React from 'react'
import  "./navbar.css";
import Toggle from './toggle/Toggle';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <div className="nav__side">
        <div className="nav__left">
            <div className="nav__name">Ashish</div>
            <Toggle/>
        </div>

        <div className="nav__right">
            <div className="nav__list">
                <ul>
                    <Link spy={true} to='Navbar'smooth={true} activeClass='
                    activeclass'>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                    <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Works' smooth={true}>
                    <li>Works</li>
                    </Link>
                    <Link spy={true} to='Testimonial' smooth={true}>
                    <li>Testimonial</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}  activeClass='activeclass'>
            <button className="btn">Contact Us</button></Link>

        </div>

    </div>
    
      
    
  );
};

export default Navbar
