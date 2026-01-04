import GBLogo from '../assets/logo.png'
import { useState } from 'react'

import './styles/Header.css'

const Header = () => {

    const scrollToCampaigns = () => {
        const campaignsSection = document.querySelector('.campaigns');
        campaignsSection.scrollIntoView({behavior: 'smooth'});
    }

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
                <a href="#" className="logoContainer">
                    <img src={GBLogo} alt="GroupBuy Logo - Go to homepage" id="logoImg"/>
                    <span>GroupBuy</span>
                </a>

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
                    <li><button id='homeNavBtn' onClick={scrollToCampaigns}>
                        Campaigns
                        </button>
                    </li>
                    <li><button id='browseNavBtn' onClick={scrollToHowItWorks}>
                        How it Works
                        </button>
                    </li>

                    <li><button id='loginBtn'>Log In</button></li>
                    <li><button id='signupBtn'>Sign Up</button></li>

                </ul>

                <div className={`mobileMenu ${isMenuOpen ? 'open' : ''}`}>
                    <button className="closeBtn" onClick={toggleMenu}>X</button>
                    <ul>
                        <li><button onClick={() => { scrollToCampaigns(); toggleMenu(); }}>Campaigns</button></li>
                        <li><button onClick={() => { scrollToHowItWorks(); toggleMenu(); }}>How It Works</button></li>
                        <li><button>Log In</button></li>
                        <li><button>Sign Up</button></li>
                    </ul>
                </div>

            </nav>        
        </header>
    )
}

export default Header;