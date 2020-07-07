import getDate from './getDate';

const renders = (data) => {
  data.then(data => {
    const main = document.getElementById('main');
    const country = document.getElementById('country');
    const temp = document.getElementById('temp');
    const tempMax = document.getElementById('temp_max');
    const tempMin = document.getElementById('temp_min');
    const tempFeels = document.getElementById('temp_feels');
    const weather = document.getElementById('weather');
    const pressure = document.getElementById('pressure');
    const wind = document.getElementById('wind');
    const clouds = document.getElementById('clouds');
    const humidity = document.getElementById('humidity');
    const city = document.getElementById('cities');
    const now = document.getElementById('now');

    const metric = wind.innerText;
    const sunny = 'https://bit.ly/2D7qXPD';
    const brokenClouds = 'https://bit.ly/3dYq08Q';
    const snow = 'https://bit.ly/2BXTkz7';
    const rain = 'https://bit.ly/38q7HbN';
    const clearSky = 'https://bit.ly/3dZ3UmN';

    function containsWord(string, word) {
      return new RegExp(`(?:[^.w]|^|^\\W+)${word}(?:[^.w]|\\W(?=\\W+|$)|$)`).test(string);
    }
    function getBackground(weather) {
      const generalStyle = ` background-position: center;
                            background-repeat: no-repeat;
                            background-size: cover; `;

      if (containsWord(weather, 'cloud')) {
        return `background-image:url(${brokenClouds});${generalStyle}`;
      }
      if (containsWord(weather, 'snow')) {
        return `background-image:url(${snow});${generalStyle}`;
      }
      if (containsWord(weather, 'rain')) {
        return `background-image:url(${rain});${generalStyle}`;
      }
      if (containsWord(weather, 'clear')) {
        return `background-image:url(${clearSky});${generalStyle}`;
      }
      if (containsWord(weather, 'sun')) {
        return `background-image:url(${sunny});${generalStyle}`;
      }
      return `background-image:url(${clearSky});${generalStyle}`;
    }


    now.innerText = getDate();
    country.innerText = data.country;
    temp.innerText = `${data.temp}º`;
    tempMax.innerText = `${data.tempMax}º`;
    tempMin.innerText = `${data.tempMin}º`;
    tempFeels.innerText = `${data.feels}º`;
    weather.innerText = data.weather.weather;
    pressure.innerText = `${data.weather.pressure}hPa`;
    wind.innerText = `${data.weather.wind.speed} ${metric}`;
    clouds.innerText = `${data.weather.clouds}%`;
    humidity.innerText = `${data.weather.humidity}%`;
    city.innerText = data.city;
    main.style = getBackground(weather.innerText);
  });
};
export default renders;