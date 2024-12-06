// Add interactivity to navigation
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.forEach((item) => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

// Validate contact form
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            e.preventDefault();
            return false;
        }

        if (message.trim() === "") {
            alert("Please enter a message.");
            e.preventDefault();
            return false;
        }

        alert("Your message has been successfully sent!");
    });
}

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Add hover effect to menu items
const menuCards = document.querySelectorAll(".card");
menuCards.forEach((card) => {
    card.addEventListener("mouseover", function () {
        card.style.boxShadow = "0px 6px 15px rgba(255, 87, 34, 0.8)";
    });
    card.addEventListener("mouseout", function () {
        card.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.5)";
    });
});
