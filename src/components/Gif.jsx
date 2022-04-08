const Gif = ({ imagen }) => {
	const { titulo, url } = imagen;

	return (
		<div className='rounded shadow overflow-hidden animate__animated animate__fadeIn'>
			<img src={url} className='w-full h-44' alt={`imagen ${titulo}`} />
			<p className='px-4 py-2'>{titulo}</p>
		</div>
	);
};

export default Gif;
