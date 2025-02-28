document.addEventListener("DOMContentLoaded", function () {
    let welcomePopup = document.getElementById("welcomePopup");
    let closePopupBtn = document.getElementById("closePopupBtn");

    // Show popup with animation and open Home tab
    setTimeout(() => {
        welcomePopup.classList.add("show");
        showSection("home"); // Automatically display Home section
    }, 500); // Delay before showing the popup

    // Function to close the popup with animation
    function closePopup() {
        welcomePopup.style.animation = "fadeOutScale 0.4s ease-in-out forwards";
        setTimeout(() => {
            welcomePopup.style.display = "none";
        }, 400); // Matches animation duration
    }

    // Auto-close popup after 5 seconds
    setTimeout(closePopup, 5000);

    // Close popup when the button is clicked
    closePopupBtn.addEventListener("click", closePopup);
});

// Function to show selected section and update the title
function showSection(sectionId) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none"; // Hide all sections
    });

    document.getElementById(sectionId).style.display = "block"; // Show the selected section

    // Update the title dynamically
    let pageTitle = document.getElementById("pageTitle");
    let titles = {
        home: "Welcome to Daystar Product Selling Platform",
        product: "Our Amazing Products - Daystar",
        about: "About Us - Daystar",
        contact: "Contact Us - Daystar",
        premium: "Premium Members Only - Daystar"
        
    };

    pageTitle.innerText = titles[sectionId] || "Daystar Product Selling Platform";
}

// Mobile Menu Toggle (Optional)
function toggleMenu() {
    let navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}
function searchProducts() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let products = document.querySelectorAll(".product-item");

    products.forEach(product => {
        let productName = product.textContent.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}









