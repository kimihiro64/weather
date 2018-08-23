import axios from 'axios';
import endpoints from './endpoints';

export function getWeatherByName(name) {
	return axios({ method: 'get', url: endpoints.weatherByName(name) }).then((res) =>
	{
		let data = res.data;

		if(data)
		{
			if(data.id)
			{
				return data.id;
			}
		}

		throw new Error('No city found');
	});
}

export function getWeatherByIds(ids) {
	let idQuery = ids[0];

	for(let i = 1; i < ids.length; i++)
	{
		idQuery += ',' + ids[i];
	}

	return axios({ method: 'get', url: endpoints.weatherByIds(idQuery) }).then((res) =>
	{
		let data = res.data

		if(data)
		{
			if(data.cnt > 0)
			{
				let weather = {};

				for(let i = 0; i < data.cnt; i++)
				{
					let row = data.list[i];
					let record = {
						name: row.name,
						icon: row.weather[0].icon,
						temp: row.main.temp,
						lotemp: row.main.temp_min,
						hitemp: row.main.temp_max,
						rain: (row.rain ? row.rain['3h'] : 0),
						id: row.id,
					};

					weather[row.id] = record;
				}

				return weather;
			}
		}

		throw new Error('Invalid data');
	});
}