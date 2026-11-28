const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("productName");

    if (productSelect) {
        products.forEach((product) => {
            const option = document.createElement("option");
            option.value = product.id;
            // Capitalize words cleanly for display
            option.textContent = product.name.replace(/\b\w/g, (char) => char.toUpperCase());
            productSelect.appendChild(option);
        });
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