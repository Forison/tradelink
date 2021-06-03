import axios from 'axios';

const authHandler =  async(data, path)=> { 
  try {
    const response = await axios({
      method: 'POST',
      url: `${path}`,
      data: data,
    });
    return response;
   } catch (error) {
     return error;
   }
};
export {authHandler}