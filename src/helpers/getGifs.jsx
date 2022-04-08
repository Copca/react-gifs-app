const URL = 'api.giphy.com/v1/gifs/search';
const API_KEY = '3Ch6bmJGLaa92Ov13cIWXHdiZJVefSyy';

const getGifs = async categoria => {
	const consulta = await fetch(
		`https://${URL}?q=${encodeURI(categoria)}&limit=10&api_key=${API_KEY}`
	);
	const { data } = await consulta.json();

	// personalizamos la respuesta y usamos los datos necesarios
	const gifs = data.map(gif => {
		return {
			id: gif.id,
			titulo: gif.title,
			url: gif.images?.downsized_medium.url
		};
	});

	return gifs;
};

export { getGifs };
