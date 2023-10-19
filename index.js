// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '460ce494b7msh1f1a3e8fa0e3da7p10bbe3jsn7ea735663439',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) => {

cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        temp.innerHTML = response.temp
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunset.innerHTML = response.sunset
        sunrise.innerHTML = response.sunrise

        console.log(response)})
    .then(err => console.log(err));

}
    
submit.addEventListener('click' , (e) => {
    e.preventDefault()
    getWeather(city.value)
})