import config from '../config';
import qs from 'qs';

function queryConfig() {
	return '&units=' + config.units + '&APPID=' + config.apiKey;
}

export default {
	weatherByName: (name) => {
		return config.apiUrl + 'weather?' + qs.stringify({q: name}) + queryConfig();
	},
	weatherByIds: (ids) => {
		return config.apiUrl + 'group?id=' + ids + queryConfig();
	},
	icon: (id) => {
		return config.imgUrl + id + '.png';
	},
};