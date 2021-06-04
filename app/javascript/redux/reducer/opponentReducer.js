import {initialState} from '../constant';

const opponentReducer = (state = initialState, action) => {
 
	switch (action.type) {
		case 'INVITE_OPPONENT': return {
      ...state, 
      opponent: {
        username: action.user.username,
        email: action.user.email,
      },
    };
		default: return state;
  }
};

export default opponentReducer;