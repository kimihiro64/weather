import React from 'react';
import PropTypes from 'prop-types';

const Temperature = ({temp}) => {
	let mainView = (
		<span className='temperature'>{temp}°</span>
	);

	return mainView;
};

Temperature.propTypes = {
	temp: PropTypes.number,
};

export default Temperature;