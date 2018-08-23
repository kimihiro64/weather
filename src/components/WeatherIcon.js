import React from 'react';
import endpoints from '../network/endpoints'
import PropTypes from 'prop-types';

const WeatherIcon = ({id}) => {
	let mainView = (
		<img className='weatherIcon' src={endpoints.icon(id)} alt='weather icon' />
	);

	return mainView;
};

WeatherIcon.propTypes = {
	id: PropTypes.string,
};

export default WeatherIcon;