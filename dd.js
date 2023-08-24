const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '489e77650emsh28ae1e36c2c58bcp1c4210jsn3cddb3e2249f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle',options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
