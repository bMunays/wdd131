const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');

let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius.toFixed(2);
areaOutput.textContent = area.toFixed(2);

radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius.toFixed(2);
areaOutput.textContent = area.toFixed(2);