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

    // temple array
    const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // 3 more temple objects added
    {
        templeName: "Harare Zimbabwe",
        location: "Harare, Zimbabwe",
        dedicated: "2026, March, 1",
        area: 17250,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-67717-main.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    }
    ];
    
    const albumGrid = document.querySelector(".album-grid");
    const pageTitle = document.getElementById("pageTitle");
    const navLinks = document.querySelectorAll(".navigation a");

    /* Render Temple Cards */
    function displayTemples(filteredTemples) {
        if (!albumGrid) return;
        albumGrid.innerHTML = "";

        filteredTemples.forEach((temple) => {
            const card = document.createElement("figure");
            card.classList.add("card");

            const name = document.createElement("h2");
            name.textContent = temple.templeName;

            const location = document.createElement("p");
            location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

            const dedicated = document.createElement("p");
            dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

            const area = document.createElement("p");
            area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = `${temple.templeName} Temple`;
            img.loading = "lazy";
            img.width = 400;
            img.height = 250;

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(area);
            card.appendChild(img);

            albumGrid.appendChild(card);
        });
    }

    /* Helper to manage active link styling and mobile menu state */
    function setActiveLink(activeElement, titleText) {
        navLinks.forEach((link) => link.classList.remove("active"));
        activeElement.classList.add("active");
        if (pageTitle) {
            pageTitle.textContent = titleText;
        }
        if (navigationList && navigationList.classList.contains("open")) {
            navigationList.classList.remove("open");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
        }
    }

    /* Navigation Filter Listeners */
    document.getElementById("home").addEventListener("click", (e) => {
        e.preventDefault();
        setActiveLink(e.currentTarget, "Home");
        displayTemples(temples);
    });

    document.getElementById("old").addEventListener("click", (e) => {
        e.preventDefault();
        setActiveLink(e.currentTarget, "Old");
        const oldTemples = temples.filter((temple) => {
            const year = parseInt(temple.dedicated.split(",")[0], 10);
            return year < 1900;
        });
        displayTemples(oldTemples);
    });

    document.getElementById("new").addEventListener("click", (e) => {
        e.preventDefault();
        setActiveLink(e.currentTarget, "New");
        const newTemples = temples.filter((temple) => {
            const year = parseInt(temple.dedicated.split(",")[0], 10);
            return year > 2000;
        });
        displayTemples(newTemples);
    });

    document.getElementById("large").addEventListener("click", (e) => {
        e.preventDefault();
        setActiveLink(e.currentTarget, "Large");
        const largeTemples = temples.filter((temple) => temple.area > 90000);
        displayTemples(largeTemples);
    });

    document.getElementById("small").addEventListener("click", (e) => {
        e.preventDefault();
        setActiveLink(e.currentTarget, "Small");
        const smallTemples = temples.filter((temple) => temple.area < 10000);
        displayTemples(smallTemples);
    });

    /* Initial Load */
    displayTemples(temples);    
});