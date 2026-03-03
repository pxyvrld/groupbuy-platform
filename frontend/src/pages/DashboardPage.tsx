import { useState } from 'react';
import { Link } from 'react-router-dom';
import { campaigns } from '../data/campaigns';
import CampaignCard from '../components/CampaignCard';
import './styles/DashboardPage.css';

  const mockUser = {
    id: 1,
    name: "Jan Kowalski",
    email: "jan@example.com",
    createdCampaigns: [2, 4],
    joinedCampaigns: [1, 3, 5, 9]
  };

const DashboardPage = () => {
  
  const [activeTab, setActiveTab] = useState("created");

  const CalculateUserSavings = () => {
    const joinedCampaigns = campaigns.filter(campaign => mockUser.joinedCampaigns.includes(campaign.id));
    const totalSaved = joinedCampaigns.reduce( (saved: number, campaign) => {
      return saved += (campaign.pricing.basePrice - campaign.pricing.currentPrice);
    }, 0)

    return totalSaved;
  }

  const createdCampaigns = campaigns.filter(campaign => mockUser.createdCampaigns.includes(campaign.id));
  const joinedCampaigns = campaigns.filter(campaign => mockUser.joinedCampaigns.includes(campaign.id)); 
  const campaignsToShow = activeTab === "created" ? createdCampaigns : joinedCampaigns;

  return (
    <div className='dashboard-container'>

      <div className="welcome-section">
        <h1>Welcome back, {mockUser.name}!</h1>
      </div>

      <div className="stat-cards-container">
        <div className="stat-card">Campaigns Created: {mockUser.createdCampaigns.length}</div>
        <div className="stat-card">Campaigns Joined: {mockUser.joinedCampaigns.length}</div>
        <div className="stat-card">Total Saved: {CalculateUserSavings()} PLN</div>
      </div>

      <div className="tabs-navigation">
        <button className={activeTab ==="created" ? "active" : ""} onClick={() => setActiveTab("created")}>
          My Campaigns
        </button>
        <button className={activeTab ==="joined" ? "active" : ""} onClick={() => setActiveTab("joined")}>
          Joined Campaigns
        </button>
      </div>

      <div className="cardsContainer">
        {campaignsToShow.map(campaign => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>

      <Link to="/create" className='create-button'>
        Create New Campaign
      </Link>

    </div>
  )
}

export default DashboardPage