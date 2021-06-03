import axios from 'axios';

const GET_AVAILABLE_USER_RECORDS = 'GET_AVAILABLE_USER_RECORDS';

const availableUsers = (token) => async (dispatch) => {
  axios.defaults.headers.common.Authorization = token;
  try {
    const response = await axios.get('/users');
    const records = response.data.record;
    dispatch({ type: GET_AVAILABLE_USER_RECORDS, records });
    return records;
   } catch (error) {
    return error;
   }
};

export default availableUsers;