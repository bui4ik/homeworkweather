const drawOption = (match, parentNode, handler) =>{
	const el = document.createElement('div');
	el.className = 'search__item';
	el.innerHTML = `<div class="search__name">${match.name}</div>`;
	el.onclick = () => handler(match.name, match.lat, match.lon );
	parentNode.appendChild(el);
};