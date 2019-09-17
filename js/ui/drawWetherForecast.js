const drawWeatherForecast = (html) =>{
	const moreContainer = document.createElement('div');
	moreContainer.className = 'more__container';
	moreContainer.id = 'more-container';
	moreContainer.innerHTML = html;
	document.getElementById('weather-result').append(moreContainer);
};