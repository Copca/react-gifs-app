import { useState, useEffect } from 'react';

import { getGifs } from '../helpers/getGifs';

const useFetchGifs = categoria => {
	const [state, setState] = useState({
		data: [],
		loading: true
	});

	useEffect(() => {
		const consultarAPI = async () => {
			const data = await getGifs(categoria);

			setState({
				data,
				loading: false
			});
		};

		consultarAPI();
	}, [categoria]);

	return state;
};

export default useFetchGifs;
