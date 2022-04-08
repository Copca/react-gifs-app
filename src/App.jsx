import { useState } from 'react';

import InputCategoria from './components/InputCategoria';
import ListaGifs from './components/ListaGifs';

const App = () => {
	const [categorias, setCategorias] = useState(['One Punch']);

	return (
		<div className='container'>
			<h1 className='text-2xl mb-2'>Gif Expert App</h1>
			<hr className='mb-8' />

			<InputCategoria setCategorias={setCategorias} />

			{categorias.map(categoria => (
				<ListaGifs key={categoria} categoria={categoria} />
			))}
		</div>
	);
};

export default App;
