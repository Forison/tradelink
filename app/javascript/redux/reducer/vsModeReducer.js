import {initialState} from '../constant';

const vsModeReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_GAME_MODE': return {
      ...state,
			vsMode: action.mode,
    };
		default: return state;
	}
};

export default vsModeReducer;