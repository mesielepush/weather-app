
const Central = () =>{

    async function weather(city,mesure){
        try{
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${mesure}&APPID=cce2c60920c027318b4c5a975aebccc8`);
            const weatherData = await response.json();
            console.log(weatherData)
            const weather =  {'weather':weatherData.list[0].weather[0].description,
                            'pressure':weatherData.list[0].main.pressure,
                            'wind':weatherData.list[0].wind,
                            'clouds':weatherData.list[0].clouds.all,
                            'humidity':weatherData.list[0].main.humidity};
                            
            const data = {'city': city,
                        'weather':weather,
                        'temp': weatherData.list[0].main.temp,
                        'tempMax': weatherData.list[0].main.temp_max,
                        'tempMin': weatherData.list[0].main.temp_min,
                        'feels': weatherData.list[0].main.feels_like,
                        'country':weatherData.city.country}
            
        return data

        } catch(err){
            alert('City does not exist')
        }
        
    }
    function celsius(city){
        return weather(city,'metric')
    }
    function imperial(city){
        return weather(city,'imperial')
    }
    return {celsius,imperial}
}


export default Central