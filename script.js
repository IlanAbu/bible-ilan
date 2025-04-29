console.log("Website script loaded successfully!");

// --- Add Your JavaScript Functionality Below ---

// Function to highlight the currently active navigation link
function highlightActiveLink() {
    const currentLocation = window.location.href; // Get the full URL of the current page (e.g., "http://example.com/faq/")
    const navLinks = document.querySelectorAll('.main-nav a'); // Get all navigation links

    navLinks.forEach(link => {
        // Access the link's fully resolved 'href' PROPERTY (e.g., "http://example.com/faq/").
        // This automatically resolves relative paths like "../faq/" into the absolute URL.
        const linkLocation = link.href;

        // Simple direct comparison of the absolute URLs
        if (linkLocation === currentLocation) {
            link.classList.add('active'); // Add the 'active' class if the link matches the current page
        } else {
            link.classList.remove('active'); // IMPORTANT: Remove 'active' class from non-matching links
        }
    });
}

// --- Run functions when the page is ready ---
document.addEventListener('DOMContentLoaded', function() {
    highlightActiveLink(); // Call the function to highlight the link when the page loads

    // You can add calls to other functions you create here
    // initializeSlider();
    // setupFormValidation();
});


// --- Add other event listeners or functions here as needed ---

// function initializeSlider() {
//     // Slider logic...
// }

// function setupFormValidation() {
//     const myForm = document.getElementById('contact-form'); // Assuming you have a form with this ID
//     if (myForm) {
//         myForm.addEventListener('submit', function(event) {
//             // Validation logic...
//             console.log("Form submitted (example)");
//             // event.preventDefault(); // Uncomment to stop actual submission for testing/AJAX
//         });
//     }
// }