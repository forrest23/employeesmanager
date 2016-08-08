import {createAction} from 'redux-actions';
import * as types from '../config/actionType';
import * as inPatientService from '../services/inPatientService';


export const getInPatientList = createAction(types.GET_INPATIENT_LIST, async (doctor, depts, division) => {
	return await inPatientService.getInPatientList(doctor, depts, division);
}, () => {
	return {
		sync: 'inPatientList'
	}
});

