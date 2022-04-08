import { useState } from 'react';
import PropTypes from 'prop-types';

const InputCategoria = ({ setCategorias }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = e => {
		setInputValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		if ([inputValue.trim()].includes('')) {
			return;
		}

		// Con esta sintaxis evitamos enviar por props las categorias
		setCategorias(cat => [inputValue, ...cat]);

		// Resetear el Input
		setInputValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				className='border rounded px-3 py-1 mb-8'
				placeholder='Agrega una categoria'
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};

InputCategoria.propTypes = {
	setCategorias: PropTypes.func.isRequired
};

export default InputCategoria;
