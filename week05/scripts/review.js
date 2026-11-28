document.addEventListener("DOMContentLoaded", () => {
    const countDisplay = document.getElementById("reviewCount");

    // Retrieve current count or default to 0
    let reviewCount = Number(localStorage.getItem("productReviewCount")) || 0;

    // Increment count on page load
    reviewCount += 1;

    // Save back to localStorage and display
    localStorage.setItem("productReviewCount", reviewCount);

    if (countDisplay) {
        countDisplay.textContent = reviewCount;
    }

    // footer date
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastMod = document.getElementById("lastModified");
    if (lastMod) {
        lastMod.textContent = `Last Modification: ${document.lastModified}`;
    }
});