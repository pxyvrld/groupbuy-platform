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

let campaigns = [];

//feat: API CALL
async function fetchCampaigns() {
    campaignsContainer.innerHTML = "<p id='loadingCampaigns-p'>Loading Campaigns . . .</p>";

    try {
        const response = await fetch("./campaigns.json");
        if (! response.ok) {
            campaignsContainer.innerHTML = `<p id='errorCampaigns-p'>Campaigns cannot be loaded! status: ${response.status}</p>`;
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        campaigns = data;
        updateCampaigns();
    } catch (error) {
        console.log(error);
        campaignsContainer.innerHTML = `<p id='errorCampaigns-p'>Campaigns cannot be loaded! Try Again!</p>`;
    }
    
}

fetchCampaigns();


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