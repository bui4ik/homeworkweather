const weatherRequest16days = async (lat, lon) =>{
	const response = await fetch(`${weatherBitAPI}forecast/daily?lat=${lat}&lon=${lon}&key=${weatherBitKey}`);
	return await response.json();
};