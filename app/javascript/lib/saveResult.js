import axios from 'axios';

const saveResult = async (board) => {
  try {
    await axios({
      method: 'POST',
      url: '/records',
      data: {record: {board}},
    });
      return true;
  } catch (error) {
      return error;
  }
};

export {saveResult};
