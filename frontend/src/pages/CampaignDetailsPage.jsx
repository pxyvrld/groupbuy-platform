import { useParams, Link } from "react-router-dom"
import { campaigns } from "../data/campaigns"
import './styles/CampaignDetailsPage.css';

const CampaignDetailsPage = () => {

  const {id} = useParams();
  const campaign = campaigns.find(c => c.id === parseInt(id));

  const progressPercent = ((campaign.people.current / campaign.people.capacity) * 100)

  if (!campaign) {
    return (
      <div>
      <h1>Campaign not found</h1>
      <p>The campaign you're looking for doesn't exist.</p>
    </div>
    )
  }

  return (
    <>
      <div className="campaignDetailsContainer">
        <Link to='/campaigns'>{'<'}- Back to Campaigns</Link>
        <div className="campaign-hero">
          <img src={campaign.image}/>
          <div className="metaContainer">
            <h1>{campaign.title}</h1>
            <h2>{campaign.category}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae dignissimos magni eaque inventore vel? Nostrum expedita maiores quam eum optio, tenetur saepe nam, voluptatum a adipisci dolorem quis iure?</p>
          </div>
        </div>
        <section className="price-tiers">
          <h2>Price Tiers</h2>
          <ul>

          </ul>
        </section>
        <section className="progress-section">
          <h1>Progress</h1>
          <div className="card_progressBar">
            <div className="progress" style={{width: `${progressPercent}%`}}></div>
          </div>
          <h2>{`${campaign.people.current} / ${campaign.people.capacity} people (${progressPercent}%)`}</h2>
        </section>
        <section className="join-section">
          <button>Join Campaign</button>
        </section>
      </div>
    </>
  )
}

export default CampaignDetailsPage