import './styles/HowItWorks.css';

function HowItWorks() {
  return (
    <section className="howItWorks" id="how-it-works">
      <h2>How It Works</h2>
      <p>GroupBuy makes saving money easy!  Here's how: </p>
      
      <div className="stepsContainer">
        <div className="step">
          <div className="stepNumber">1</div>
          <h3>Browse Campaigns</h3>
          <p>Find products you want to buy with others.</p>
        </div>
        
        <div className="step">
          <div className="stepNumber">2</div>
          <h3>Join a Group</h3>
          <p>The more people join, the lower the price for everyone!</p>
        </div>
        
        <div className="step">
          <div className="stepNumber">3</div>
          <h3>Save Money</h3>
          <p>Get your product at the best group price when the goal is reached.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;