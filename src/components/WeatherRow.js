import React from 'react';
import WeatherIcon from './WeatherIcon';
import Temperature from './Temperature';
import constants from '../constants';
import { cancelPropagation } from '../utility';
import PropTypes from 'prop-types';

const WeatherRow = ({row, onDetailSelected, onRemoveSelected}) => {
	let mainView = (
		<div onClick={() => { onDetailSelected(row.id); } }>
			<WeatherIcon id={row.icon} />
			<div>
				{row.name}<br />
				<Temperature temp={row.temp} />
			</div>
			<br />
			<a className='link' onClick={(e) => {
				cancelPropagation(e);

				onRemoveSelected(row.id);
    		} }>
    			{constants.REMOVE}
    		</a>
			<hr />
		</div>
	);

	return mainView;
};

WeatherRow.propTypes = {
	row: PropTypes.object,
	onDetailSelected: PropTypes.func,
	onRemoveSelected: PropTypes.func,
};

export default WeatherRow;