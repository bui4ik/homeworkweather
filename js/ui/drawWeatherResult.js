const drawWeatherResult = (data) => {
	const weather = document.createElement('div');
	weather.className = 'weather__result';
	weather.id = 'weather-result';
	weather.innerHTML = `<div class="weather__name">${data[0].city_name}, ${data[0].country_code}</div>
							<div class="weather__container">
								<div class="weather__image">
									<img src="./assets/icons/${data[0].weather.icon}.png">
									<div class="weather__name">${data[0].weather.description}</div>
								</div>
								<div class="weather__temp"> ${data[0].temp} C</div>
								<div class="weather__description">
									<div>Wind: ${data[0].wind_spd}  kmph</div>
									<div>Precip: ${data[0].precip}  mm</div>
									<div>Pressure: ${data[0].pres}  mm</div>
								</div>
							</div>
							<button id="more-btn">16 Day Weather Forecast</button>`;
	document.getElementById('weather-result-container').append(weather);
};