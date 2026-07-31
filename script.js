// Welcome message
window.onload = function () {
    alert("Welcome to My Portfolio Website!");
};

// Smooth welcome in console
console.log("Portfolio website loaded successfully!");

// Display current year in footer (optional)
const year = new Date().getFullYear();
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${year} Your Name. All Rights Reserved.`;
}