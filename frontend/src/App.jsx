import Header from './components/Header'
import Hero from './components/Hero'
import CampaignCard from './components/CampaignCard'
import Footer from './components/Footer'

import { campaigns } from './data/campaigns'
import './App.css'

function App() {

  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <section className="campaigns">
        <h1>Active Campaigns</h1>
        <h2>Join a group purchase now and start saving. The more people join, the lower your price!</h2>
        <div className='cardContainer'>
          {campaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </section>

    </main>
    <Footer/>
    </>
  )
}

export default App
