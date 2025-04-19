const hamburgerIcon = document.getElementById('hamburger-icon');
const drawer = document.getElementById('drawer');

hamburgerIcon.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        if (drawer.style.transform === 'translateX(0%)') {
            drawer.style.transform = 'translateX(100%)';
        } else {
            drawer.style.transform = 'translateX(0%)';
        }
    }
});



function loadPage(page) {
    console.log(page);
    const contentContainer = document.getElementById('content-container');
    const iframe = document.createElement('iframe');


    if (page.includes("student")) {
        iframe.src = `./../../Life-Below-Water/pages/page-editor/${page}/${page}.html`;
    } else {
        iframe.src = `./../../Life-Below-Water/pages/${page}/${page}.html`;
    }





    iframe.style.width = "100%";
    iframe.style.border = "none";
    iframe.style.height = "81vh";

    contentContainer.innerHTML = '';
    contentContainer.appendChild(iframe);
}

window.onload = function () {
    const contentContainer = document.getElementById('content-container');

    const splashIframe = document.createElement('iframe');
    splashIframe.src = './../../Life-Below-Water/pages/splashscreen/splashscreen.html';
    splashIframe.style.width = "100%";
    splashIframe.style.border = "none";
    splashIframe.style.height = "100vh";

    contentContainer.innerHTML = '';
    contentContainer.appendChild(splashIframe);

    // Load home page after 4 seconds (4000ms)
    setTimeout(() => {
        loadPage('home');
    }, 4000);
};