import React from 'react';
import WeatherRow from './WeatherRow';
import PropTypes from 'prop-types';

const WeatherList = ({data, onDetailSelected, onRemoveSelected}) => {
	let mainView = (
		<div>
			<hr />
			{Object.keys(data).map((element) => {
				return <WeatherRow key={element} row={data[element]} onDetailSelected={onDetailSelected} onRemoveSelected={onRemoveSelected} />;
			})}
		</div>
	);

	return mainView;
};

WeatherList.propTypes = {
	data: PropTypes.object,
	onDetailSelected: PropTypes.func,
	onRemoveSelected: PropTypes.func,
};

export default WeatherList;