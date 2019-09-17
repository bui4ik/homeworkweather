const citiesRequest = async searchText => {
	if(searchText && searchText.length > 0) {
		const response = await fetch(
			`${apixuAPI}search.json?key=${apixuKey}&q=${searchText}`,
		);
		return await response.json()
	}
};