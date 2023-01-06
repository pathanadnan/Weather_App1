const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3765290e6msh8f910ffaa1fd40bp1d25adjsn75197f2ed8fc',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city) => {
	cityname.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			temp2.innerHTML = response.temp
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			humidity2.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			wind_speed2.innerHTML = response.wind_speed
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getweather(city.value)
})
getweather("Mumbai")



