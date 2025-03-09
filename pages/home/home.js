// const cardData = [
//     {
//         imgSrc: "../../assets/images/home/polluted-oceans.png",
//         altText: "Ocean Pollution",
//         title: "Ocean Pollution",
//         desc: "Marine pollution is a combination of chemicals and trash, most of which comes from land sources and is washed or blown into the ocean.",
//         link: "#"
//     },
//     {
//         imgSrc: "../../assets/images/home/Marine-Conservation-Programs.jpg",
//         altText: "Marine Life Conservation",
//         title: "Marine Life Conservation",
//         desc: "Protecting ocean and sea ecosystems and the life that depends on them. It involves limiting human activities that harm marine life.",
//         link: "#"
//     },
//     {
//         imgSrc: "../../assets/images/home/sustainable-fishin.jpg",
//         altText: "Sustainable Fishing",
//         title: "Sustainable Fishing",
//         desc: "Catching fish in a way that maintains healthy fish populations, while also supporting the communities that depend on fishing.",
//         link: "#"
//     },
//     {
//         imgSrc: "../../assets/images/home/coral-reef-protection.jpg",
//         altText: "Coral Reef Protection",
//         title: "Coral Reef Protection",
//         desc: "Coral reef protection involves modifying human activities to prevent damage to healthy coral reefs and assist damaged ones in recovering.",
//         link: "#"
//     }
// ];
//
// document.addEventListener("DOMContentLoaded", () => {
//     const cardContainer = document.getElementById("cardContainer");
//     const cardTemplate = document.getElementById("cardTemplate");
//
//     cardData.forEach(card => {
//         const cardElement = cardTemplate.cloneNode(true);
//         cardElement.style.display = 'block';
//
//         cardElement.querySelector(".image").src = card.imgSrc;
//         cardElement.querySelector(".image").alt = card.altText;
//         cardElement.querySelector(".title").textContent = card.title;
//         cardElement.querySelector(".desc").textContent = card.desc;
//         cardElement.querySelector(".card-link").href = card.link;
//         cardElement.querySelector(".action").href = card.link;
//
//         cardContainer.appendChild(cardElement);
//     });
// });
// scripts.js

// Function to load the header dynamically
// scripts.js

// Function to load the header dynamically
function loadHeader() {
    fetch('/pages/header/header.html')  // Path to the header file
        .then(response => response.text())
        .then(data => {
            // Insert the loaded header into the placeholder
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// Function to update iframe source dynamically based on the query parameter
function loadContent(page) {
    // Update the iframe src to load the page dynamically
    document.getElementById('content-frame').src = `pages/${page}/${page}.html`;
}

// Get the page name from the query parameter (e.g., ?page=home)
window.onload = () => {
    loadHeader();
    let urlParams = new URLSearchParams(window.location.search);
    let page = urlParams.get('page') || 'home';  // Default to 'home' if no page parameter is given
    loadContent(page);
};

