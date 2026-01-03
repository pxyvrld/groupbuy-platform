import GBLogo from '../assets/logo.png'

const Header = () => {
    return (
        <header>
            <nav>
                <a href="#" className="logoContainer">
                    <img src={GBLogo} alt="GroupBuy Logo - Go to homepage" id="logoImg"/>
                    <span>GroupBuy</span>
                </a>
                <ul className="navLinks">
                    <li><button id='homeNavBtn'>Campaigns</button></li>
                    <li><button id='browseNavBtn'>How it works</button></li>
                    <li><button id='loginBtn'>Start Campaign</button></li>
                </ul>
            </nav>        
        </header>
    )
}

export default Header;