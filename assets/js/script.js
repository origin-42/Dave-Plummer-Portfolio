// Call Github API and render pages
const choreDoorImg = "./assets/images/portfolio-images/choredoor.jpg";
const doneDailyImg = "./assets/images/portfolio-images/DoneDaily.jpg";
const passwordGenImg = "./assets/images/portfolio-images/password-generator.jpg";
const quizTimeoutImg = "./assets/images/portfolio-images/quiztimeout.jpg";
const weatherHostImg = "./assets/images/portfolio-images/weather_host.jpg";
const whereToWatchImg = "./assets/images/portfolio-images/where-to-watch.jpg";

let images = [
    {
        image: choreDoorImg,
        name: "choredoor"
    }, 
    {
        image: doneDailyImg,
        name: "DoneDaily"
    }, 
    {
        image: passwordGenImg,
        name: "password-generator"
    }, 
    {
        image: quizTimeoutImg,
        name: "quiztimeout"
    }, 
    {
        image: weatherHostImg,
        name: "weather_host"
    }, 
    {
        image: whereToWatchImg,
        name: "where-to-watch"
    }, 
];

// Project Info
let projects = [
    {
        name: "Where to Watch",
        id: "whereToWatch",
        githubUrl: "https://github.com/origin-42/where-to-watch",
        description: "Got a show you're interested in? Get all of its information here in one easy search",
        releaseDate: "March, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript", "APIs", "Boostrap", "JQuery", "JQueryUI", "Github"],
        projectType: "Group Project",
        image: "./assets/images/portfolio-images/where-to-watch.jpg",
        longDescription: "Here is a game designed to test your knowledge. there's always a way to around doing your chores. Try NOT to find Chorebot.",
        pointOne: "Calculate where Chorebot might be",
        pointTwo: "Receive feedback on wins and losses",
        pointThree: "Gain advantage and defeat, not defeating your chores",
        purpose: "I created a game from scratch as a requirement of work from Codecademy where the goal was to use Javascript to alter the page and results based on user input and outcome."
    },
    {
        name: "Your Weather Host",
        id: "weatherHost",
        githubUrl: "https://github.com/origin-42/weather_host",
        description: "A dashboard using the 'openweathermap' api to displlay weather info.",
        releaseDate: "March, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript", "APIs", "Boostrap", "JQuery", "JQueryUI", "Github"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/weather_host.jpg",
        longDescription: "Here is an application to check cities on the globe for weather conditions. Helpful for those travelling, scouting, or just planning a trip to the beach, don't forget your sunscreen!",
        pointOne: "Search a Country from anywhere in the world",
        pointTwo: "Receive feedback on current and future weather conditions",
        pointThree: "Save and refresh previous searches",
        purpose: "This application was designed to received information on weather and specifically UV information."
    },
    {
        name: "Done Daily",
        id: "doneDaily",
        githubUrl: "https://github.com/origin-42/DoneDaily",
        description: "Schedule events with this simple daily planner.",
        releaseDate: "March, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript", "Web APIs", "Boostrap", "JQuery", "Github", "Moment.js"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/DoneDaily.jpg",
        longDescription: "This calendar day planner is a simple alternative to the many complicated applications out there that are used for everyday time scheduling. Simply load it in your browser and plan away. No need to keep the application open, as it will remember your schedule years from now.",
        pointOne: "Plan an event and monitor it for the day, week, month or even year",
        pointTwo: "Save information to page and come back to update later",
        pointThree: "User friendly application with calendar for date selection",
        purpose: "This application was designed to help keep track daily activities on the hour to keep a schedule."
    },
    {
        name: "Quiz Timeout",
        id: "quizTimeout",
        githubUrl: "https://github.com/origin-42/quiztimeout",
        description: "A timed coding quiz where to test your knowledge of javascript and web API's, CSS, and HTML.",
        releaseDate: "March, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/quiztimeout.png",
        longDescription: "This game is designed as a test to Javascript fundamentals using nested timeout and interval functions and recursion. Plan through and beat your own high score, save your initials and try again until you achieve a perfect score for the round.",
        pointOne: "Reiterate over your JavaScript knowledge",
        pointTwo: "Save scores to track against yourself and others",
        pointThree: "Mobile responsive to play on the phone whilst travelling",
        purpose: "This was a game designed to practise Javascript front-end development and web api's, setTimeout and setInterval."
    },
    {
        name: "Password Generator",
        id: "passwordGen",
        githubUrl: "https://github.com/origin-42/password-generator",
        description: "Randomly generate a password for use with online applications.",
        releaseDate: "February, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/password-generator.png",
        longDescription: "Here you can generate a password from 8 to 128 characters in length and check criteria to allow for a more customiseable and secure password for use in applications.",
        pointOne: "Generate a password for online applications",
        pointTwo: "Select from criteria to reduce brute force hacking attempts",
        pointThree: "Easy click to save clickboard functionality for mobile devices",
        purpose: "This was a game designed to provide an easy to use application to generate a password and help users reduce potential security breaches on their devices by not using the same password twice."
    },
    {
        name: "ChoreDoor",
        id: "choredoor",
        githubUrl: "https://github.com/origin-42/choredoor",
        description: "A basic game with javascript. Avoid the chore bot!.",
        releaseDate: "February, 2022",
        releaseYear: "2022",
        technologies: ["HTML", "CSS", "JavaScript"],
        projectType: "Individual Project",
        image: "./assets/images/portfolio-images/choredoor.jpg",
        longDescription: "Here is a game designed to test your knowledge. there's always a way to around doing your chores. Try NOT to find Chorebot.",
        pointOne: "Calculate where Chorebot might be",
        pointTwo: "Receive feedback on wins and losses",
        pointThree: "Gain advantage and defeat, not defeating your chores",
        purpose: "I created a game from scratch as a requirement of work from Codecademy where the goal was to use Javascript to alter the page and results based on user input and outcome."
    },
    {
        name: "West Wolf Media",
        id: "wwMedia",
        githubUrl: "https://westwolfmedia.com/",
        description: "A company website for wedding videography and related services.",
        releaseDate: "February, 2020",
        releaseYear: "2020",
        technologies: ["WordPress", "CSS"],
        projectType: "Company Website",
        image: "./assets/images/portfolio-images/west-wolf.jpg",
        longDescription: "This website provides wedding and related videography services for anybody looking to get married.",
        pointOne: "Book a meetup with owners to discuss videography details",
        pointTwo: "Check pricing directly from the website prior to engaging",
        pointThree: "View previous services rendered to clients for weddings and other events",
        purpose: "This website was created for a small business along with a marketing campaign to help the owners establish an online presence and content with the market, mostly through word of mouth."
    }
]

// render each project to page
projects.forEach(project => {

    let card = $(`<div class="card" id="${project.id}" style="width: 15rem;" data-bs-toggle="modal" data-bs-target="#portfolio-selection">
                    <img src="${project.image}" class="card-img-top" alt="${project.id}">
                    <div class="card-body">
                    <h5 class="card-title">${project.name} (${project.releaseYear})</h5>
                    <p class="card-text">${project.description}</p>
                    </div>
                </div>`);

    $("#portfolio-container").append(card);

    // setup portfolio

    $(`#${project.id}`).on("click", function () {

        $("#pf-techUsed").empty();
        
        $("#projectType").text(project.projectType);
        $("#pf-title").text(project.name);
        $("#pf-dateReleased").text(project.releaseDate);
        $("#pf-description").text(project.longDescription);
        $("#pf-tagOne").text(project.pointOne);
        $("#pf-tagTwo").text(project.pointTwo);
        $("#pf-tagThree").text(project.pointThree);
        $("#pf-purpose").text(project.purpose);
        $("#pf-image").attr("src", `${project.image}`)
        $("#pf-image-wrapper").attr("href", `${project.githubUrl}`)
        $("#pf-image").attr("alt", `${project.name} Website`)
        
        let arr = [];
        project.technologies.forEach(tech => {

            let li = $("<li>");
            li.text(tech);
            arr.push(li);
            
        })
        
        arr.forEach(li => {
            $("#pf-techUsed").append(li);
        })
        
    })

})
