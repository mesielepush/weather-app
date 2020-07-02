
async function weatherCelcius(city){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=cce2c60920c027318b4c5a975aebccc8`);
    const weatherData = await response.json();
    const city_data =  {city} =weatherData
    console.log(city)
}
export default weatherCelcius