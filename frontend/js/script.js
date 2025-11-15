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


let browseBtn = document.querySelector(".browseBtn");
let campaignsSection = document.querySelector("#campaigns");

browseBtn.addEventListener("click", () => {
    campaignsSection.scrollIntoView({ behavior: 'smooth' });
});