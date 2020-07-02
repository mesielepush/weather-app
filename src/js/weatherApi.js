
const Central = () =>{

    async function weather(city,mesure){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${mesure}&APPID=cce2c60920c027318b4c5a975aebccc8`);
        const weatherData = await response.json();
        const tempData = weatherData.list[0].main.temp
        console.log(tempData)
    }
    function celsius(city){
        return weather(city,'metric')
    }
    function imperial(city){
        return weather(city,'imperial')
    }
    return {celsius,imperial
}}


export default Central