import { useState } from "react";
import './styles/CreateCampaignPage.css';

const CreateCampaignPage = () => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "food",
    basePrice: 0,
    tier1Max: 0,
    tier1Price: 0,
    tier2Max: 0,
    tier2Price: 0,
    tier3Price: 0,
    capacity: 0,
    minRequired: 0,
    deadline: ""
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    
    console.log("Formularz wysłany!", formData);
    
    // TODO: Tutaj zbudujesz obiekt kampanii
    // TODO: Tutaj wywołasz addCampaign()
    // TODO: Tutaj przekierujesz usera
  };

  return (
    <>
      <div className="create-campaign-container">
        <h1>Create New Campaign</h1>
        <form onSubmit={handleSubmit}>
          
          <div className="form-row">
            <div className="form-group">
              <label>Campaign Title</label>
              <input 
                type="text" 
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Premium Coffee Beans"
              />
            </div>

            <div className="form-group">
              <label>Campaign Category</label>
              <select
                name="category" 
                value={formData.category} 
                onChange={handleChange}
              >
                <option value="food">🍔 Food & Drinks</option>
                <option value="beauty">💄 Beauty & Care</option>
                <option value="electronics">💻 Electronics</option>
                <option value="sports">⚽ Sports & Fitness</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Campaign Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your campaign in detail..."
              rows={5}
            />
          </div>

          <div className="ImageSection">
            <label>Campaign Image URL</label>
            <input 
              type="text" 
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          
          <div className="PricingSection">
            <h3>Campaign Pricing</h3>

            <div className="form-group">
              <label>Base Price (PLN)</label>
              <input 
                type="number"
                name="basePrice"
                value={formData.basePrice}
                onChange={handleChange}
                placeholder="100"
              />
            </div>

            <h4>Tier 1 (1 - ??? people)</h4>
            <div className="tier-row">
              <div className="tier-field">
                <label>Max People</label>
                <input 
                  type="number"
                  name="tier1Max"
                  value={formData.tier1Max}
                  onChange={handleChange}
                  placeholder="5"
                />
              </div>
              <div className="tier-field">
                <label>Price per Person (PLN)</label>
                <input 
                  type="number"
                  name="tier1Price"
                  value={formData.tier1Price}
                  onChange={handleChange}
                  placeholder="100"
                />
              </div>
            </div>
  
            <h4>Tier 2 (??? - ??? people)</h4>
            <div className="tier-row">
              <div className="tier-field">
                <label>Max People</label>
                <input 
                  type="number"
                  name="tier2Max"
                  value={formData.tier2Max}
                  onChange={handleChange}
                  placeholder="15"
                />
              </div>
              <div className="tier-field">
                <label>Price per Person (PLN)</label>
                <input 
                  type="number"
                  name="tier2Price"
                  value={formData.tier2Price}
                  onChange={handleChange}
                  placeholder="80"
                />
              </div>
            </div>
            
            <h4>Tier 3 (??? - capacity people)</h4>
            <div className="tier-field">
              <label>Price per Person (PLN)</label>
              <input 
                type="number"
                name="tier3Price"
                value={formData.tier3Price}
                onChange={handleChange}
                placeholder="60"
              />
            </div>

          </div>

          <div className="PeopleSection">
            <div className="people-field">
              <label>Maximum Capacity</label>
              <input 
                type="number" 
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                placeholder="20"
              />
            </div>
            
            <div className="people-field">
              <label>Minimum Required</label>
              <input 
                type="number" 
                name="minRequired"
                value={formData.minRequired}
                onChange={handleChange}
                placeholder="10"
              />
            </div>
          </div>

          <div className="TimeSection">
            <label>Campaign Deadline</label>
            <input 
              type="datetime-local" 
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Create Campaign</button>
        </form>
      </div>
    </>
  )
}

export default CreateCampaignPage