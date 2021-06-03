import {initialState} from '../constant';

const userRecordsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_USER_RECORDS': return {
			...state,
			record: action.record,
    };
		default: return state;
	}
};
export default userRecordsReducer;
