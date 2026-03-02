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
        const matchesCategory = selectedCategory === "all" || campaign.category.id === selectedCategory;
        const matchesSearch = searchTerm === "" || campaign.title.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
        })
    }

    const filteredCampaigns = filterCampaigns(searchTerm,selectedCategory);

    const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
        if (selectedSort === "price-asc") return a.pricing.currentPrice - b.pricing.currentPrice;
        if (selectedSort === "price-desc") return b.pricing.currentPrice - a.pricing.currentPrice;
        if (selectedSort === "time") {
          const timeA = new Date(a.deadline).getTime() - new Date().getTime();
          const timeB = new Date(b.deadline).getTime() - new Date().getTime();
          return timeA - timeB;
        }
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