console.log("Website script loaded successfully!");

// --- Add Your JavaScript Functionality Below ---

/**
 * Function to highlight the currently active navigation link based on URL.
 * Handles potential inconsistencies with trailing slashes and index.html.
 */
function highlightActiveLink() {
    // Get the full current URL and normalize it (remove hash, query string, trailing slash, and trailing 'index.html')
    const currentLocation = window.location.protocol + "//" + window.location.host + window.location.pathname;
    const currentPath = window.location.pathname.replace(/\/$/, '').replace(/\/index\.html$/, ''); // Remove trailing / or /index.html

    const navLinks = document.querySelectorAll('.main-nav a');

    console.log("Current Normalized Path:", currentPath); // Debugging

    navLinks.forEach(link => {
        try {
            // Create a URL object to easily get parts, handling potential invalid URLs gracefully
            const linkUrl = new URL(link.href);
            const linkPath = linkUrl.pathname.replace(/\/$/, '').replace(/\/index\.html$/, ''); // Normalize link path same way

            console.log(`Checking Link: ${link.href} (Normalized Path: ${linkPath})`); // Debugging

            // Compare the normalized paths
            if (linkPath === currentPath) {
                 // Check hostnames match too, prevents matching '/about' on different domains if ever applicable
                if (window.location.hostname === linkUrl.hostname) {
                    console.log("MATCH FOUND! Adding 'active' to:", link.href); // Debugging
                    link.classList.add('active');
                } else {
                     link.classList.remove('active');
                }

            } else {
                link.classList.remove('active'); // Ensure non-matching links are not active
            }
        } catch (e) {
            // Log error if a link has an invalid href
            console.error("Could not parse link href:", link.href, e);
             link.classList.remove('active');
        }
    });
}

// --- Make sure it's called correctly ---
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded. Running highlightActiveLink...");
    highlightActiveLink(); // Call the updated function

    // ... any other initializations like initializeCollapsibleSections ...
});


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