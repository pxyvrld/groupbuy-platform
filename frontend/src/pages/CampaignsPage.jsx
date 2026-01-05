import { useState } from "react";
import { campaigns } from '../data/campaigns';
import Filters from '../components/Filters'
import CampaignCard from "../components/CampaignCard";


const CampaignsPage = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedSort, setSelectedSort] = useState("default");

    const filterCampaigns = (searchTerm, selectedCategory) => {
        return campaigns.filter(campaign => {
        const matchesCategory = selectedCategory === "all" || campaign.category === selectedCategory;
        const matchesSearch = searchTerm === "" || campaign.title.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
        })
    }

    const filteredCampaigns = filterCampaigns(searchTerm,selectedCategory);

    const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
        if (selectedSort === "price-asc") return a.price - b.price;
        if (selectedSort === "price-desc") return b.price - a.price;
        if (selectedSort === "time") return a.timeLeft - b.timeLeft;
        if (selectedSort === "popular") return b.people.current - a.people.current;
        return 0;
    });

  return (
    <main>
      <section className="campaigns">
      
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />
        <div className='cardsContainer'>
          {sortedCampaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      
              </section>
    </main>
  )
}

export default CampaignsPage