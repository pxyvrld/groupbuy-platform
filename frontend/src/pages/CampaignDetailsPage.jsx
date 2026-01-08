import { useParams, Link } from "react-router-dom"
import { campaigns } from "../data/campaigns"
import './styles/CampaignDetailsPage.css';

const CampaignDetailsPage = () => {

  const {id} = useParams();
  const campaign = campaigns. find(c => c.id === parseInt(id));

  if (!campaign) {
    return (
      <div>
        <h1>Campaign not found</h1>
        <p>The campaign you're looking for doesn't exist.</p>
      </div>
    )
  }

  const progressPercent = Math.round((campaign.people.current / campaign.people.capacity) * 100);

  return (
    <>
      <main>
        <div className="campaignDetailsContainer">
          <Link to='/campaigns'>{'<'} Back to Campaigns</Link>
        
          <div className="campaign-hero">
            <img src={campaign.image} alt={campaign.title} />
            <div className="metaContainer">
              <h1>{campaign.title}</h1>
              <span
                className="category-badge"
                style={{ backgroundColor: campaign.category.color }}
              >
                {campaign.category. icon} {campaign.category.name}
              </span>
              <p>{campaign.description}</p>
              <p className="organizer">
                Organized by <strong>{campaign.organizer. displayName}</strong>
              </p>
            </div>
          </div>
          <section className="progress-section">
            <h2>📊 Campaign Progress</h2>
            <div className="card_progressBar">
              <div className="progress" style={{width: `${progressPercent}%`}}></div>
            </div>
            <p className="progress-text">
              {campaign.people.current} / {campaign.people.capacity} people joined ({progressPercent}%)
            </p>
            <p className="min-required">
              Minimum required: {campaign.people.minRequired} people
            </p>
          </section>
          <section className="price-tiers">
            <h2>💰 Pricing Tiers</h2>
            <p>The more people join, the lower the price! </p>
            <ul>
              {campaign.pricing.tiers.map((tier, index) => (
                <li
                  key={index}
                  className={
                    campaign.people.current >= tier.min &&
                    (tier.max === null || campaign.people.current <= tier.max)
                      ?  'active-tier'
                      : ''
                  }
                >
                  <span className="tier-range">
                    {tier.min} - {tier.max || '+'} people
                  </span>
                  <span className="tier-price">
                    {tier.pricePerPerson} {campaign.pricing.currency}/person
                  </span>
                </li>
              ))}
            </ul>
            <div className="current-price-info">
              <p>Current price: <strong>{campaign.pricing.currentPrice} {campaign.pricing.currency}</strong></p>
            </div>
          </section>
          <section className="join-section">
            <div className="join-info">
              <h2>Ready to join?</h2>
              <p>Reserve your spot now and pay the final price when the campaign ends!</p>
              <p className="deadline-info">
                Deadline: {new Date(campaign.deadline).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute:  '2-digit'
                })}
              </p>
            </div>
            <Link to='/login' className="join-button">Join Campaign</Link>
          </section>
        </div>
      </main>
    </>
  )
}

export default CampaignDetailsPage