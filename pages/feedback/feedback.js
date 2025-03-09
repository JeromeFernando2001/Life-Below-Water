document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
    const charCount = document.getElementById("charCount");
    const ratingStars = document.querySelectorAll(".rating span");

    // Email validation
    email.addEventListener("input", function () {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.nextElementSibling.style.display = "block";
        } else {
            email.nextElementSibling.style.display = "none";
        }
    });

    // Phone number validation
    phone.addEventListener("input", function () {
        const phonePattern = /^\d{10,15}$/;
        if (!phonePattern.test(phone.value)) {
            phone.nextElementSibling.style.display = "block";
        } else {
            phone.nextElementSibling.style.display = "none";
        }
    });

    // Character Counter for Textarea
    message.addEventListener("input", function () {
        let remaining = 300 - message.value.length;
        charCount.textContent = remaining;
    });

    // Star Rating Selection
    ratingStars.forEach((star, index) => {
        star.addEventListener("click", function () {
            ratingStars.forEach((s, i) => {
                s.classList.toggle("active", i <= index);
            });
        });
    });

    // Form Submit Validation
    form.addEventListener("submit", function (event) {
        if (!email.value || !phone.value || !message.value) {
            alert("Please fill in all required fields correctly.");
            console.log("alert this")
            event.preventDefault();
        }
    });
});
