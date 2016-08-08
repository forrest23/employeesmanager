import * as requestService from './request';
import {getToken, setToken} from './token';
import { format } from '../utils';
import config from '../config';

function filterData(data) {
	return data.data;
}

export function getInPatientList(doctor, depts, division) {
	return requestService.get(config.getInPatientList)
		.then((data)=>data);
}

