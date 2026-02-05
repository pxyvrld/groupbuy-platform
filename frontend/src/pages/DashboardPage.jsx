import { useState } from 'react';
import { campaigns } from '../data/campaigns';
import './styles/DashboardPage.css';
import { Link } from 'react-router-dom';

  const mockUser = {
    id: 1,
    name: "Jan Kowalski",
    email: "jan@example.com",
    createdCampaigns: [2, 4],
    joinedCampaigns: [1, 3, 5]
  };

const DashboardPage = () => {
  
  const [activeTab, setActiveTab] = useState("created");

  return (
    <div className='dashboard-container'>

      <div className="welcome-section">
        <h1>Welcome back, {mockUser.name}!</h1>
      </div>

      <div className="stat-cards-container">
        <div className="stat-card">Campaigns Created: ?</div>
        <div className="stat-card">Campaigns Joined: ?</div>
        <div className="stat-card">Total Saved: ? PLN</div>
      </div>

      <div className="tabs-navigation">
        <button onClick={() => setActiveTab("created")}>
          My Campaigns
        </button>
        <button onClick={() => setActiveTab("joined")}>
          Joined Campaigns
        </button>
      </div>

      <div className="campaigns-grid">
        <p>Active tab: {activeTab}</p>
      </div>

      <Link to="/create" className='create-button'>
        Create New Campaign
      </Link>

    </div>
  )
}

export default DashboardPage