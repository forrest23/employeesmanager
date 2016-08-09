import qs from 'query-string';
import * as tokenService from './token';
import config from '../config';

let apiPath = '';

const urlPrefix = config.domain + apiPath;
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;


function filterJSON(res) {
	return res.json();
}


function filterStatus(res) {
	if (res.status >= 200 && res.status < 300) {
		return res;
	}
	else {
		let error = new Error(res.statusText);
		error.res = res;
		error.type = 'http';
		throw error;
	}
}


export function get(url, params) {
	url = urlPrefix + url;
	if (params) {
		url += `?${qs.stringify(params)}`;
	}

	if (isDebuggingInChrome) {
		console.info(`GET: `, url);
		console.info(`Params: `, params)
	}

	return fetch(url,
		{
			headers: {
				'Authorization': tokenService.getToken()
			},
		})
		.then(filterStatus)
		.then(filterJSON);
}


export function post(url, body, type) {
	url = urlPrefix + url;
	let contentType = "application/json";

	if (isDebuggingInChrome) {
		console.info(`POST: `, url);
		console.info(`Body: `, body);
	}
	if (type != undefined && type != "json") {
		body = body;
		contentType = "application/x-www-form-urlencoded";
	} else {
		body = JSON.stringify(body);
	}
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': contentType,
			'dataType': 'json',
			'Authorization': tokenService.getToken()
		},
		body: body

	})
		.then(filterStatus)
		.then(filterJSON);
}


