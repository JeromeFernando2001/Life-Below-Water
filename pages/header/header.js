
const hamburgerIcon = document.getElementById('hamburger-icon');
const drawer = document.getElementById('drawer');


document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Stop the default behavior (which may cause partial rendering)

            const targetPage = this.getAttribute("href"); // Get the actual URL

            window.location.href = targetPage; // Force full page navigation
        });
    });
});




hamburgerIcon.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        if (drawer.style.transform === 'translateX(0%)') {
            drawer.style.transform = 'translateX(100%)';
        } else {
            drawer.style.transform = 'translateX(0%)';
        }
    }
});
