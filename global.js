// injectHeader.js

document.addEventListener("DOMContentLoaded", function () {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../../pages/header/header.css"; // Adjust the path to the correct location of your CSS file
    document.head.appendChild(link);



    const headerHTML = `
    <header>
      <div class="nav-bar">
        <div class="container">
          <div class="logo">
            <img src="../../assets/images/header/life-below-water-high-resolution-logo%20(5).png" alt="Logo">
          </div>

          <nav class="desktop-nav">
            <ul>
              <li><a class="nav-link" href="../home/home.html">Home</a></li>
              <li><a class="nav-link" href="../profile/profile.html">Profile</a></li>
              <li><a class="nav-link" href="../statistics/statistics.html">Statistics</a></li>
              <li><a class="nav-link" href="../feedback/feedback.html">Feedback</a></li>
              <li><a class="nav-link" href="../team/team.html">Our Team</a></li>
              <li><a class="nav-link" href="../sitemap/sitemap.html">Sitemap</a></li>
              <li><a class="nav-link" href="../volunteer/volunteer.html">Volunteer</a></li>
            </ul>
          </nav>

          <div class="mobile-nav">
            <i class="fas fa-bars" id="hamburger-icon"></i>
          </div>
        </div>
      </div>

      <div class="drawer" id="drawer">
        <ul>
          <li><a class="nav-link" href="../home/home.html">Home</a></li>
          <li><a class="nav-link" href="../profile/profile.html">Profile</a></li>
          <li><a class="nav-link" href="../statistics/statistics.html">Statistics</a></li>
          <li><a class="nav-link" href="../feedback/feedback.html">Feedback</a></li>
          <li><a class="nav-link" href="../team/team.html">Our Team</a></li>
          <li><a class="nav-link" href="../sitemap/sitemap.html">Sitemap</a></li>
          <li><a class="nav-link" href="../volunteer/volunteer.html">Volunteer</a></li>
        </ul>
      </div>
    </header>
  `;

    // Insert the header at the top of the page
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
