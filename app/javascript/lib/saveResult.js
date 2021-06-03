import axios from 'axios';

const saveResult = async (record) => {
  try {
    await axios({
      method: 'POST',
      url: '/records',
      data: record,
    });
      return true;
  } catch (error) {
      return error;
  }
};

export {saveResult};
