import React from 'react';
import constants from '../constants';
import WeatherIcon from './WeatherIcon';
import Temperature from './Temperature';
import PropTypes from 'prop-types';

const WeatherDetail = ({data, onBack}) => {
	let mainView = (
		<div>
			<a className='link' onClick={onBack}>{constants.GOBACK}</a>
			<br />
			<br />
			<WeatherIcon id={data.icon} />
			<div>
				{data.name}<br />
				<Temperature temp={data.temp} /><br />
				<br />
				Hi: <Temperature temp={data.hitemp} /><br />
				Lo: <Temperature temp={data.lotemp} /><br />
				Rain: {data.rain} in.
			</div>
		</div>
	);

	return mainView;
};

WeatherDetail.propTypes = {
	data: PropTypes.object,
	onBack: PropTypes.func,
};

export default WeatherDetail;