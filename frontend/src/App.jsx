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
        {campaigns.map(campaign => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </section>

    </main>
    <Footer/>
    </>
  )
}

export default App
