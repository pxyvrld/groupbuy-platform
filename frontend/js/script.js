console.log("JS loaded");


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


//feat: Dynamic progress bars

const progressBars = document.querySelectorAll(".progress");

progressBars.forEach((bar) => {
    const peopleText = bar.closest(".card").querySelector(".card_people_meter span").innerText;
    const number = parseInt(peopleText.split("/")[0])
    const capacity = parseInt(peopleText.split(" ")[0].split("/")[1])
    bar.style.width = (number/capacity) * 100 + "%"
})
