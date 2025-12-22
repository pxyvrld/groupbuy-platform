console.log("JS loaded");

const campaignsContainer = document.querySelector(".campaigns");
const categoryFilter = document.querySelector("#category-filter");
const searchBar = document.querySelector("#search-bar");
const sortFilter = document.querySelector("#sort-filter");
const modal = document.querySelector(".modal")
const modalCloseBtn = document.querySelector(".modal-closeBtn")
const modalOverlay = document.querySelector(".modal-overlay")
const modalBody = document.querySelector(".modal-body")
const browseBtn = document.querySelector(".browseBtn");
const browseNavBtn = document.querySelector("#browseNavBtn");
const campaignsSection = document.querySelector("#space-to-scroll");
let activeTimers = [];

const savedFilters ={
    category: localStorage.getItem("category") || "all",
    searchQuery: localStorage.getItem("searchQuery") || "",
    sortValue: localStorage.getItem("sortValue") || "default"
};

let campaigns = [
    {
        id: 1,
        image: '/frontend/assets/images/coffee.jpg',
        title: 'Coffee from Roastery (10kg)',
        price: 30,
        category: 'food',
        people: {current: 7, capacity: 10},
        timeLeft: 66734
    },
    {
        id: 2,
        image: '/frontend/assets/images/yerba.png',
        title: 'Yerba Mate Premium (10kg)',
        price: 50,
        category: 'food',
        people: {current:  9, capacity: 10},
        timeLeft: 44109
    },
    {
        id: 3,
        image: '/frontend/assets/images/honey.jpg',
        title: 'Organic Wildflower Honey (5kg)',
        price: 25,
        category: 'food',
        people: {current:  4, capacity: 8},
        timeLeft: 103422
    },
    {
        id: 4,
        image: '/frontend/assets/images/oliveoil.webp',
        title: 'Extra Virgin Olive Oil (10L)',
        price: 45,
        category: 'food',
        people: {current:  6, capacity: 12},
        timeLeft: 88956
    },
    {
        id: 5,
        image: '/frontend/assets/images/tea.jpg',
        title: 'Premium Green Tea Collection (5kg)',
        price: 35,
        category: 'food',
        people: {current: 3, capacity: 10},
        timeLeft: 72841
    },

    {
        id: 6,
        image: '/frontend/assets/images/skincare.webp',
        title: 'Organic Premium Skincare Set',
        price: 40,
        category: 'beauty',
        people: {current:  5, capacity: 8},
        timeLeft: 20722
    },
    {
        id: 7,
        image: '/frontend/assets/images/haircare.webp',
        title: 'Professional Hair Care Bundle',
        price: 55,
        category: 'beauty',
        people: {current:  8, capacity: 15},
        timeLeft: 95234
    },
    {
        id: 8,
        image: '/frontend/assets/images/soap.jpg',
        title: 'Natural Handmade Soap Set (50pcs)',
        price: 20,
        category: 'beauty',
        people: {current:  12, capacity: 20},
        timeLeft: 56789
    },

    {
        id: 9,
        image: '/frontend/assets/images/headphones.jpg',
        title: 'Wireless Noise-Cancelling Headphones',
        price: 120,
        category: 'electronics',
        people: {current:  15, capacity: 25},
        timeLeft: 134567
    },
    {
        id: 10,
        image: '/frontend/assets/images/keyboard.jpg',
        title: 'Mechanical Gaming Keyboard RGB',
        price: 85,
        category: 'electronics',
        people: {current: 10, capacity: 20},
        timeLeft: 48923
    },

    {
        id: 11,
        image: '/frontend/assets/images/yogamat.jpg',
        title: 'Premium Yoga Mat Set with Blocks',
        price: 60,
        category: 'sports',
        people: {current: 7, capacity: 15},
        timeLeft: 112456
    },
    {
        id: 12,
        image: '/frontend/assets/images/protein.jpg',
        title: 'Whey Protein Powder Bulk (10kg)',
        price: 95,
        category: 'sports',
        people: {current:  18, capacity: 30},
        timeLeft: 67234
    }
];



//feat: Dynamic campaigns, sort and filter categories

const filterCampaigns = (category, searchQuery) => {
    return campaigns.filter(campaign => {
        const matchesCategory = category === "all" || campaign.category === category;
        const matchesSearch = searchQuery === "" || campaign.title.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    })
}

function generateCard(campaign) {
    const progressPercent = ((campaign.people.current / campaign.people.capacity) * 100)

    return `<article class="card" data-id="${campaign.id}">
                <div class="card_img">
                    <img src="${campaign.image}" alt="${campaign.title} image">
                </div>
                <div class="card_metaProgressContainer">
                    <div class="card_meta">
                        <h3>${campaign.title}</h3>
                        <span>${campaign.price}$ per person for a group of ${campaign.people.capacity}</span>
                    </div>
                    <div class="card_progressBar">
                        <div class="progress" style= "width: ${progressPercent}%;"></div>
                    </div>
                </div>
                <div class="card_timePeopleContainer">
                    <div class="card_time">
                        <img src="assets/images/timeicon.png" alt="Time Icon">
                        <span>Remaining: <time class="remaining-time--${campaign.id}" aria-live="polite">${secondsToTime(campaign.timeLeft)}</time></span>
                    </div>
                    <div class="card_people_meter">
                        <img src="assets/images/peopleicon.png" alt="People Icon">
                        <span>${campaign.people.current}/${campaign.people.capacity} people joined</span>
                    </div>
                </div>
                <div class="card_detailsBtn">
                    <button class="detailsBtn">></button>
                </div>
            </article>`
}

const renderCampaigns = (campaignsArray) => {
    campaignsContainer.innerHTML = campaignsArray.map(campaign => generateCard(campaign)).join('')
    startTimers();
}

categoryFilter.addEventListener('change', updateCampaigns);
searchBar.addEventListener('input', updateCampaigns)
sortFilter.addEventListener("change", updateCampaigns)

categoryFilter.value = savedFilters.category;
searchBar.value = savedFilters.searchQuery;
sortFilter.value = savedFilters.sortValue;
updateCampaigns();

function updateCampaigns() {
    const category = categoryFilter.value;
    const searchQuery = searchBar.value;
    const sortValue = sortFilter.value;
    const filteredCampaigns = filterCampaigns(category, searchQuery);
    let result = filteredCampaigns;

    switch (sortValue) {
            case "price-low":
            result = filteredCampaigns.sort((a, b) => a.price - b.price);
            break;
        
        case "price-high":
            result = filteredCampaigns.sort((a, b) => b.price - a.price);
            break;
        
        case "people-high":
            result = filteredCampaigns.sort((a, b) => b.people.current - a.people.current);
            break;
        
        case "deadline-soon":
            result = filteredCampaigns.sort((a, b) => a.timeLeft - b.timeLeft);
            break;

        default:
            break;
    }
    renderCampaigns(result);
    localStorage.setItem("category", category);
    localStorage.setItem("searchQuery", searchQuery);
    localStorage.setItem("sortValue", sortValue);
}


//feat: Modal

campaignsContainer.addEventListener("click", (e) => {
    const button = e.target.closest(".detailsBtn");

    if (button) {
        const actualCard = button.closest(".card")
        const actualBody = actualCard.outerHTML
        modalBody.innerHTML = actualBody;
        const metaButtonContainer = modalBody.querySelector(".card_detailsBtn")
        metaButtonContainer.remove()

        //feat: join button
        const campaignId = parseInt(actualCard.dataset.id);
        const campaign = campaigns.find(c=> c.id === campaignId);
        modalBody.firstChild.innerHTML += 
        `<button class="joinBtn">Join Campaign ($${campaign.price})</button>
        <p class="error-message hidden">Campaign is full!</p>`;

        const errorMessage = modalBody.querySelector(".error-message");
        const joinBtn = modalBody.querySelector('.joinBtn');
        joinBtn.addEventListener('click', () => {
            if ((campaign.people.current >= campaign.people.capacity)) {
                errorMessage.classList.remove("hidden");
                return;
            }
            campaign.people.current++;
            renderCampaigns(campaigns);
            modal.classList.add("hidden");
        });

        modal.classList.remove("hidden")
    }
})

modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hidden")
})

modalOverlay.addEventListener("click", (e) => {
    if(e.target === modalOverlay) {
        modal.classList.add("hidden")
    }
})


//feat: Countdown Timer on cards

function timetoSeconds(timeString) {
    let parts = timeString.split(":");
    let hours = parseInt(parts[0]);
    let minutes = parseInt(parts[1]);
    let seconds = parseInt(parts[2]);
    return hours * 3600 + minutes * 60 + seconds;
}

function secondsToTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds % 3600 / 60);
    let remainingSeconds = seconds % 60;

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (remainingSeconds < 10) remainingSeconds = "0" + remainingSeconds;
    
    return `${hours}:${minutes}:${remainingSeconds}`;
}

function startTimers(){
    const timeElement = document.querySelectorAll(".card_time time");

    activeTimers.forEach(timerId => clearInterval(timerId));
    activeTimers = [];

    timeElement.forEach((e) => {
        let totalSeconds = timetoSeconds(e.innerText);

        const timer = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                e.innerText = secondsToTime(totalSeconds);
            } else {
                clearInterval(timer);
            }
        }, 1000);
        activeTimers.push(timer);
    });
}


//feat: Smooth scrolling on buttons

browseBtn.addEventListener("click", () => {
    campaignsSection.scrollIntoView({ behavior: 'smooth' });
});

browseNavBtn.addEventListener("click", () => {
    campaignsSection.scrollIntoView({ behavior: 'smooth' });
});