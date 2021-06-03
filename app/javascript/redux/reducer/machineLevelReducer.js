import {initialState} from '../constant';

const machineLevelReducer = (state = initialState, action) => {
  
	switch (action.type) {
		case 'CHANGE_MACHINE_LEVEL': return {
      ...state,
			machineLevel: action.level,
    };
		default: return state;
	}
};

export default machineLevelReducer;