import {initialState} from '../constant';

const userRecordsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_AVAILABLE_USER_RECORDS': return {
			...state,
			availableUsers: action.records,
    };
		default: return state;
	}
};
export default userRecordsReducer;