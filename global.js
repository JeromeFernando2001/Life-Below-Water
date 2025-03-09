// scripts.js

function loadHeader() {
    fetch('./../pages/header/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// Function to update iframe source dynamically based on the query parameter
function loadContent(page) {
    document.getElementById('content-frame').src = `pages/${page}/${page}.html`;
}

// Get the page name from the query parameter (e.g., ?page=home)
window.onload = () => {
    loadHeader();
    let urlParams = new URLSearchParams(window.location.search);
    let page = urlParams.get('page') || 'home';
    loadContent(page);
};
