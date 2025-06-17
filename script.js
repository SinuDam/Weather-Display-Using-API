const apiKey = 'f4aae6f486014f673a9e7581959d5a64';

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const weatherInfo = document.getElementById('weatherInfo');
  const errorMsg = document.getElementById('errorMsg');

  if (!city) return;

  try {
    const data = await res.json();

    if (data.cod !== 200) {
      weatherInfo.classList.add('hidden');
      errorMsg.textContent = "City not found 😢";
      return;
    }

    document.getElementById('CityName').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temp').textContent = `🌡 Temperature: ${data.main.temp} °C`;
    document.getElementById('description').textContent = `🌥 Condition: ${data.weather[0].description}`;

    errorMsg.textContent = '';
    weatherInfo.classList.remove('hidden');
  } catch (error) {
    weatherInfo.classList.add('hidden');
    errorMsg.textContent = "Something went wrong. Try again!";
  }
}
