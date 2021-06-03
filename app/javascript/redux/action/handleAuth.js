import axios from 'axios';

const AUTH_USER = 'AUTH_USER';

const handleAuth = (data, path) => async (dispatch) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${path}`,
      data: data,
    });
    const user = response.data.user_info;
    user['token'] = response.data.token;
    user['isLogin'] = true;
    dispatch({ type: AUTH_USER, user });
    return user;
   } catch (error) {
     return error;
   }
};

export default handleAuth;