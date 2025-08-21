async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = de1e60d227c504bb041100849e4193e8;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();

        document.getElementById("result").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>☁️ Weather: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
    } catch (error) {
        document.getElementById("result").innerHTML =
            `<p style="color:red;">${error.message}</p>`;
    }
}