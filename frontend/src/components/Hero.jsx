import GBLogo from '../assets/logo.png'

const Hero = () => {
  return (
    <section className="hero">
        <img src={GBLogo} alt="GroupBuy Hero Image" className="heroImg"/>
        <h2>Save up to 40% with group buying</h2>
        <h1>Shop Together, <span className='heroSpan'>Save more</span></h1>
        <h2>Join group purchasing campaigns and watch prices drop as more people join. The more we are, the less we pay!</h2>
        <div className='btnsContainer'>
          <button className="browseBtn">Browse Campaigns</button>
          <button className='howItWorksBtn'>How it Works</button>
        </div>
        <div className='examplePriceTiers'>
          <p>Example Price Tiers</p>
          <div className='tiersContainer'>
            <div className='tier'>
              <p>1-4 people</p>
              <h2>50 PLN</h2>
            </div>
            <div className='tier'>
              <p>5-9 people</p>
              <h2>40 PLN</h2>
            </div>
            <div className='tier'>
              <p>10+ people</p>
              <h2>30 PLN</h2>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero