import axios from 'axios';

const GET_USER_RECORDS = 'GET_USER_RECORDS';

const userRecords = () => async (dispatch) => {
  try {
    const response = await axios.get('/records');
    const record = response.data.record;
    dispatch({ type: GET_USER_RECORDS, record });
    return records;
   } catch (error) {
     return error;
   }
};

export default userRecords;