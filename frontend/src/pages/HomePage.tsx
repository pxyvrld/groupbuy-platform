import Hero from '../components/Hero'
import CampaignCard from '../components/CampaignCard'
import HowItWorks from '../components/HowItWorks'
import {campaigns} from '../data/campaigns';
import './styles/HomePage.css';

const HomePage = () => {

  const featuredCampaigns = campaigns.slice(0, 4);

  return (
    <>
      <Hero/>
      <main>
        <section className='campaigns'>
          <h1>Featured Campaigns</h1>
          <h2>Join a group purchase now and start saving. The more people join, the lower your price!</h2>
          <div className='cardsContainer'>
            {featuredCampaigns.map(campaign => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </section>
        <HowItWorks/>
      </main>
    </>
  )
}

export default HomePage