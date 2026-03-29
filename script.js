async function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://wttr.in/${city}?format=j1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const weatherHTML = `
            <h2>${city}</h2>
            <p>🌡️ Temperature: ${data.current_condition[0].temp_C} °C</p>
            <p>☁️ Weather: ${data.current_condition[0].weatherDesc[0].value}</p>
            <p>💧 Humidity: ${data.current_condition[0].humidity}%</p>
            <p>🌬️ Wind Speed: ${data.current_condition[0].windspeedKmph} km/h</p>
        `;

        document.getElementById("weatherResult").innerHTML = weatherHTML;

    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "Error fetching data";
        console.log(error);
    }
}