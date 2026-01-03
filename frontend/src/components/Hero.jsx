import GBLogo from '../assets/logo.png'

const Hero = () => {
  return (
    <section className="hero">
        <img src={GBLogo} alt="GroupBuy Hero Image" className="heroImg"/>
        <h1>Welcome to GroupBuy.</h1>
        <h2>Gather a group, buy cheaper. More people = lower price.</h2>
        <h2>Buy Together, Save more!</h2>
        <button className="browseBtn">Start Browsing</button>
    </section>
  )
}

export default Hero