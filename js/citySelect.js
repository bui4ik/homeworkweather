class CitySelect {
	constructor (){
		this.search = document.getElementById('search');
		this.matchList = document.getElementById('match-list');
		this.search.addEventListener('input', () => select.citySearch(this.search.value));
	}

	citySearch = async searchText => {
		let matches =  await citiesRequest(searchText);
		this.options(matches);
	};

	options = matches => {
		this.matchList.innerHTML = '';
		if(matches && matches.length > 0) {
			matches.map(match => {
				drawOption(match, this.matchList, this.chooseCity)
			})
		}
	};

	chooseCity = async (city, lat, lon) => {
		this.matchList.innerHTML = '';
		const weatherResult = document.getElementById('weather-result');
		if(weatherResult){
			weatherResult.remove()
		}
		this.search.value = city;
		const { data } = await weatherRequest(lat, lon);
		drawWeatherResult(data);
		const moreBtn = document.getElementById('more-btn');
		moreBtn.onclick = async () => {
			const someDays = await weatherRequest16days(lat,lon);
			const html = someDays.data.map(day => `
				<div class="day__item">
					<div>${day.datetime}</div>
					<img src="./assets/icons/${day.weather.icon}.png">
					<div>${day.temp}</div>
				</div>
			`).join('');
		if (document.getElementById('more-container')){
			document.getElementById('more-container').remove();
		}
		drawWeatherForecast(html)
		};
	};
}