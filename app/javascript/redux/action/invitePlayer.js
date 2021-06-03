import axios from 'axios';

const invitePlayer = async (email) => {
  axios.defaults.headers.common.Authorization = token;
  try {
    const response = await axios({
      method: 'POST',
      url: '/records',
      data: {record: {email}},
    });
    const user = response.data;
    return user;
    } catch (error) {
     return error;
    }
};

export default invitePlayer;