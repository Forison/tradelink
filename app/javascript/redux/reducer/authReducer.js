import {initialState} from '../constant';

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'AUTH_USER': return {
			user: {
				username: action.user.username,
        email: action.user.email,
        isLogin: true,
        token: action.user.token
			},
    };
    case 'LOG_OUT': return {
      ...state,
			user: {
				username: '',
        email: '',
        isLogin: false,
        token: ''
			},
    };
    
		case 'CREATE_USER_ERROR': return {
      ...state,
			user: {
				username: '',
        email: '',
        isLogin: false,
			},
		};
		default: return state;
	}
};
export default authReducer;
