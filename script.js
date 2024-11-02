let temperature = 20; // Initial temperature
let temperatureHistory = [];
let roomVisible = false;

function toggleRoom() {
    const room = document.getElementById("room");
    const button = document.getElementById("roomToggleButton");
    roomVisible = !roomVisible;
    room.style.display = roomVisible ? "block" : "none";
    button.textContent = roomVisible ? "Close Room" : "Open Room";
}

function deleteHistory() {
    temperatureHistory = []; // Clear the history
    displayHistory(); // Update the display
    displayMessage("Temperature history has been deleted.");
}

function displayCatReport() {
    const report = document.getElementById("catReport");
    report.style.display = "block";
    report.innerHTML = `
        <b>Cat Report:</b><br>
        Health: Excellent<br>
        Mood: Playful<br>
        Energy: High<br>
        Hunger Level: Low
    `;
    setTimeout(() => { report.style.display = "none"; }, 5000); // Hide report after 5 seconds
}

function increaseTemperature() {
    temperature++;
    document.getElementById("temperatureDisplay").innerText = "Temperature: " + temperature + " °C";
    temperatureHistory.push(temperature);
    displayHistory();
}

function decreaseTemperature() {
    temperature--;
    document.getElementById("temperatureDisplay").innerText = "Temperature: " + temperature + " °C";
    temperatureHistory.push(temperature);
    displayHistory();
}

function setTemperature(value) {
    temperature = value;
    document.getElementById("temperatureDisplay").innerText = "Temperature: " + temperature + " °C";
    temperatureHistory.push(temperature);
    displayHistory();
}

// Display temperature history
function displayHistory() {
    const historyDisplay = document.getElementById("history");
    historyDisplay.innerHTML = ""; // Clear previous history
    temperatureHistory.forEach((temp, index) => {
        historyDisplay.innerHTML += `Day ${index + 1}: ${temp} °C<br>`;
    });
}

// Function to display the "meow" message when the cat is clicked
function displayMeowMessage() {

    const meowMessage = document.getElementById("meowMessage");
    meowMessage.innerHTML = "Meow! 🐾";


    // Play the meow sound
    const meowSound = document.getElementById("meowSound");
    meowSound.play();

    setTimeout(() => { meowMessage.innerHTML = ""; }, 5000); // Clear after 5 seconds

}
