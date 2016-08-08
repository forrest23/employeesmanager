import * as requestService from './request';
import {getToken, setToken} from './token';


function filterData(data) {
	return data.data;
}

export function getInPatientByDepart(departId) {
	return requestService.get('/topic/' + id)
		.then(filterData)
		.then(inPatient=> {
			if (inPatient && inPatient.id) {
				return inPatient
			}
			throw 'getInPatientByDepart Error'
		})
}

