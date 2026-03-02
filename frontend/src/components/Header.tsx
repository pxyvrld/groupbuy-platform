import GBLogo from '../assets/logo.png'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './styles/Header.css'

const Header = () => {

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const scrollToHowItWorks = () => {
        const sectionHIT = document.querySelector('.howItWorks');
        sectionHIT.scrollIntoView({behavior: 'smooth'});
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header>
            <nav>
                <Link to='/' className="logoContainer">
                    <img src={GBLogo} alt="GroupBuy Logo - Go to homepage" id="logoImg"/>
                    <span>GroupBuy</span>
                </Link>

                <button 
                    className="hamburger" 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className="navLinks">
                    <li><Link to='/campaigns'>
                        Campaigns
                        </Link>
                    </li>

                    {isHomePage && (
                        <li><button id='browseNavBtn' onClick={scrollToHowItWorks}>
                            How it Works
                            </button>
                        </li>
                    )}


                    <li><Link to='/login' id='loginBtn'>Log In</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>

                </ul>

                <div className={`mobileMenu ${isMenuOpen ? 'open' : ''}`}>
                    <button className="closeBtn" onClick={toggleMenu}>X</button>
                    <ul>
                        <li><Link to='/campaigns' onClick={toggleMenu}>Campaigns</Link></li>
                        
                        {isHomePage && (
                            <li><button onClick={() => { scrollToHowItWorks(); toggleMenu(); }}>How It Works</button></li>
                        )} 
                        
                        <li><Link to='/login' id='loginBtn' onClick={toggleMenu}>Log In</Link></li>
                        <li><Link to='/signup' onClick={toggleMenu}>Sign Up</Link></li>
                    </ul>
                </div>

            </nav>        
        </header>
    )
}

export default Header;