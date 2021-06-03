import {initialState} from '../constant';

const opponentReducer = (state = initialState, action) => {
  
	switch (action.type) {
		case 'LOG_OUT': return {...state, initialState};
		default: return state;
  }
};

export default opponentReducer;