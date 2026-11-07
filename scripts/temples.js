// Wait until the DOM is fully parsed and loaded
document.addEventListener("DOMContentLoaded", () => {
    
   /*footer*/
    // Select footer target spans
    const currentYearSpan = document.getElementById("currentYear");
    const lastModifiedSpan = document.getElementById("lastModified");

    // Output the current four-digit calendar year
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Output the system-tracked document modification timestamp
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;
    }

    /* hamburger */
    const menuButton = document.getElementById("menuButton");
    const navigationList = document.querySelector(".navigation");

    // Ensure elements exist before appending event handling logic
    if (menuButton && navigationList) {
        menuButton.addEventListener("click", () => {
            // Toggle visibility by injecting/removing the layout target class
            navigationList.classList.toggle("open");

            // Evaluate state to shift contextual text content between symbols
            if (navigationList.classList.contains("open")) {
                menuButton.textContent = "✕"; // Clean 'X' symbol to signal closure
                menuButton.setAttribute("aria-expanded", "true");
                menuButton.setAttribute("aria-label", "Close navigation menu");
            } else {
                menuButton.textContent = "☰"; // 3-line hamburger character
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Open navigation menu");
            }
        });
    }
});