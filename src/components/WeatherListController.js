import React, { Component } from 'react';
import config from '../config';
import { getWeatherByIds } from '../network/api';
import constants from '../constants';
import WeatherList from './WeatherList';
import WeatherDetail from './WeatherDetail';
import _ from 'lodash';
import WeatherInput from './WeatherInput';

class WeatherListController extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			cities: config.cities,
			cityData: null,
			loading: true,
			error: false,
			detailSelected: null,
		};
	}

	componentDidMount() {
		this.refreshWeatherData();
	}

	refreshWeatherData() {
		this.setState({loading: true});

		getWeatherByIds(this.state.cities).then((data) =>
		{
			console.log(data);

			this.setState({cityData: data, loading: false});
		})
		.catch((error) =>
		{
			console.log(error);

			this.setState({loading: false, error: true});
		});
	}

	selectDetail(city) {
		this.setState({detailSelected: city});
	}

	removeCity(city) {
		let cities = this.state.cities.filter((element) => {
			return element !== city;
		});

		let cityData = _.cloneDeep(this.state.cityData);

		delete cityData[city];

		this.setState({cities: cities, cityData: cityData});
	}

	addCity(city) {
		let cities = _.cloneDeep(this.state.cities);

		if(cities.includes(city))
		{
			alert(constants.CITYDUPLICATE);

			return;
		}

		cities.push(city);

		this.setState({cities: cities}, () => {
			this.refreshWeatherData();
		});
	}

	render() {
		if(this.state.loading === true)
		{
			return constants.LOADING;
		}

		if(this.state.error === true)
		{
			return constants.ERROR;
		}

		let focusedComponent;

		if(this.state.detailSelected === null)
		{
			focusedComponent = (
				<div>
					<WeatherInput onAddCity={(city) => { this.addCity(city); } } />
					<WeatherList data={this.state.cityData} onDetailSelected={(city) => { this.selectDetail(city); } } onRemoveSelected={(city) => { this.removeCity(city); } } />
				</div>
			);
		}
		else
		{
			focusedComponent = <WeatherDetail data={this.state.cityData[this.state.detailSelected]} onBack={() => { this.selectDetail(null); } } />;
		}

		let mainView = (
			<div>
				{focusedComponent}
			</div>
		);

		return mainView;
	}
}

export default WeatherListController;