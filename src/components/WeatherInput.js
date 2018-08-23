import React, { Component } from 'react';
import { getWeatherByName } from '../network/api';
import constants from '../constants';
import PropTypes from 'prop-types';

class WeatherInput extends Component {
	constructor(props) {
		super(props);

		this.state = { input: '' };
	}

	handleSubmit(e) {
		e.preventDefault();

		getWeatherByName(this.state.input).then((cityId) =>
		{
			this.props.onAddCity(cityId);
		})
		.catch((error) =>
		{
			console.log(error);

			alert(constants.CITYNOTFOUND);
		});
	}

	handleChange(e) {
		this.setState({input: e.target.value});
	}

	render() {
		let mainView = (
			<div>
				<form onSubmit={(e) => { this.handleSubmit(e); } } >
					<input type='text' value={this.state.input} onChange={(e) => { this.handleChange(e); } } /><br />
					<input type='submit' value={constants.ADDCITY} />
				</form>
			</div>
		);

		return mainView;
	}
}

WeatherInput.propTypes = {
	onAddCity: PropTypes.func,
};

export default WeatherInput;