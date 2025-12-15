console.log("JS loaded");

//feat: Dynamic campaigns and filter categories

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
        people: {current: 9, capacity: 10},
        timeLeft: 44109
    },

    {
        id: 3,
        image: '/frontend/assets/images/skincare.webp',
        title: 'Organic Premum Skincare Set',
        price: 40,
        category: 'beauty',
        people: {current: 5, capacity: 8},
        timeLeft: 20722
    }
    ];

const campaignsContainer = document.querySelector(".campaigns");

let filterCampaigns = (category) => {
    if(category === "all") {
        return campaigns;
    }
    return campaigns.filter(campaign => campaign.category === category);
}

function generateCard(campaign) {
    const progressPercent = ((campaign.people.current / campaign.people.capacity) * 100)

    return `<article class="card card--${campaign.id}">
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
}

const categoryFilter = document.querySelector("#category-filter");

categoryFilter.addEventListener('change', (e) => {
    const filteredCampaigns = filterCampaigns(e.target.value);
    renderCampaigns(filteredCampaigns);
});

renderCampaigns(campaigns);


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

let timeElement = document.querySelectorAll(".card_time time");

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

})

//feat: Smooth scrolling on buttons

let browseBtn = document.querySelector(".browseBtn");
let browseNavBtn = document.querySelector("#browseNavBtn");
let campaignsSection = document.querySelector("#campaigns");

browseBtn.addEventListener("click", () => {
    campaignsSection.scrollIntoView({ behavior: 'smooth' });
});

browseNavBtn.addEventListener("click", () => {
    campaignsSection.scrollIntoView({ behavior: 'smooth' });
});

//feat: Modal

const modalButtons = document.querySelectorAll(".detailsBtn")
const modal = document.querySelector(".modal")
const modalCloseBtn = document.querySelector(".modal-closeBtn")
const modalOverlay = document.querySelector(".modal-overlay")
const modalBody = document.querySelector(".modal-body")

modalButtons.forEach((e) => {
    e.addEventListener("click", () => {

        const actualCard = e.closest(".card")
        const actualBody = actualCard.outerHTML

        modalBody.innerHTML = actualBody;
        const metaButtonContainer = modalBody.querySelector(".card_detailsBtn")
        metaButtonContainer.remove()
        modal.classList.remove("hidden")
    })
})

modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hidden")
})

modalOverlay.addEventListener("click", (e) => {
    if(e.target === modalOverlay) {
        modal.classList.add("hidden")
    }
})
