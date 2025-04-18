const cardData = [
    {
        imgSrc: "./../content-pages/Student1/Images/polution 4.jpg",
        altText: "Ocean Pollution",
        title: "Ocean Pollution",
        desc: "Marine pollution is a combination of chemicals and trash, most of which comes from land sources and is washed or blown into the ocean.",
        link: "./../content-pages/Student1/ocean-polution.html"
    },
    {
        imgSrc: "../../assets/images/home/marine.jpg",
        altText: "Marine Life Conservation",
        title: "Marine Life Conservation",
        desc: "Protecting ocean and sea ecosystems and the life that depends on them. It involves limiting human activities that harm marine life.",
        link: "./../content-pages/student2/marine-life-conservation.html"
    },
    {
        imgSrc: "./../content-pages/Student4/Images/sustainable-fishin.jpg",
        altText: "Sustainable - Fishing",
        title: "Sustainable  Fishing",
        desc: "Catching fish in a way that maintains healthy fish populations, while also supporting the communities that depend on fishing.",
        link: "./../content-pages/Student4/sustainable-fishing.html"
    },
    {
        imgSrc: "../../assets/images/home/coral-light_orig.jpg",
        altText: "Coral Reef Protection",
        title: "Coral Reef Protection",
        desc: "Coral reef protection involves modifying human activities to prevent damage to healthy coral reefs and assist damaged ones in recovering.",
        link: "#"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("cardContainer");
    const cardTemplate = document.getElementById("cardTemplate");

    cardData.forEach(card => {
        const cardElement = cardTemplate.cloneNode(true);
        cardElement.style.display = 'block';
        const imageElement = cardElement.querySelector(".image");
        imageElement.src = card.imgSrc;
        imageElement.alt = card.altText;

        const cardLink = cardElement.querySelector(".card-link");
        cardLink.href = card.link;

        cardElement.querySelector(".title").textContent = card.title;
        cardElement.querySelector(".desc").textContent = card.desc;

        cardContainer.appendChild(cardElement);
    });
});