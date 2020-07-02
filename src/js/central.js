
const Central = () =>{

    async function weather(city,mesure){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${mesure}&APPID=cce2c60920c027318b4c5a975aebccc8`);
        const weatherData = await response.json();
        const weather =  {'weather':weatherData.list[0].weather[0].main,
                            'description':weatherData.list[0].weather[0].description}
        const data = {'weather':weather,
                      'temperature': weatherData.list[0].main.temp,
                      'country':weatherData.city.country}
        return data
        
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