import useFetchGifs from '../hooks/useFetchGifs';

import Gif from './Gif';

const ListaGifs = ({ categoria }) => {
	const { loading, data: imagenes } = useFetchGifs(categoria);

	return (
		<>
			<h3 className='text-xl font-bold mb-8 animate__animated animate__fadeIn'>
				{categoria}
			</h3>

			{loading && <p className='animate__animated animate__flash'>Cargando...</p>}

			<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				{imagenes.map(imagen => (
					<Gif key={imagen.id} imagen={imagen} />
				))}
			</div>
		</>
	);
};

export default ListaGifs;
