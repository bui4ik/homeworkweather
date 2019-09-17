const weatherRequest = async (lat, lon) =>{
	const response = await fetch(`${weatherBitAPI}current?&lat=${lat}&lon=${lon}&key=${weatherBitKey}`);
	return await response.json();
};