import getDate from './getDate'
const renderCelsius = (data)=>{
    
    data.then(data => {
        console.log(data)
        const country    = document.getElementById('country');
        const temp       = document.getElementById('temp');
        const temp_max   = document.getElementById('temp_max');
        const temp_min   = document.getElementById('temp_min');
        const temp_feels = document.getElementById('temp_feels');
        const weather    = document.getElementById('weather');
        const pressure   = document.getElementById('pressure');
        const wind       = document.getElementById('wind');
        const clouds     = document.getElementById('clouds');
        const humidity   = document.getElementById('humidity');
        const city       = document.getElementById('cities');
        const now        = document.getElementById('now');

        now.innerText = getDate()
        country.innerText = data.country
        temp.innerText = data.temp
        temp_max.innerText   =data.tempMax
        temp_min.innerText   =data.tempMin
        temp_feels.innerText =data.feels
        weather.innerText = data.weather.weather
        pressure.innerText = data.weather.pressure
        wind.innerText = data.weather.wind.spped
        clouds.innerText = data.weather.clouds
        humidity.innerText = data.weather.humidity
        city.innerText = data.city

    })
    
    
}
export default renderCelsius