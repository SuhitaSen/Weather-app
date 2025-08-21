const apiKey = "de1e60d227c504bb041100849e4193e8";

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("weatherResult");

    if (city === "") {
        resultDiv.innerHTML = "<p>Please enter a city name!</p>";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // 👈 shows response in browser console

        if (response.status !== 200) {
            resultDiv.innerHTML = `<p style="color:red;">Error: ${data.message}</p>`;
            return;
        }

        resultDiv.innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡️ Temp: ${data.main.temp} °C</p>
      <p>☁️ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color:red;">Error fetching data</p>`;
    }
}
