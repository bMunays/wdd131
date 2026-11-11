// Output current year and last modified date in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static variables
const temp = 10;   // Celsius
const wind = 15;   // km/h

// Wind chill function using exactly one line of code
const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

// Do not call the function unless metric conditions are met 
// (Temp <= 10°C, Wind > 4.8 km/h)
if (temp <= 10 && wind > 4.8) {
    document.getElementById("windchill").textContent = `${calculateWindChill(temp, wind)} °C`;
} else {
    document.getElementById("windchill").textContent = "N/A";
}