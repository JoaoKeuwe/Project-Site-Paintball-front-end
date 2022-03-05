import api from './Api';

const tableGet = async () => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type' : 'application/json',
    'Authorization': token
  }
  try {
    const { data } = await api.get('/player', {headers});
    return data;
  } catch (error) {
    console.log(error.response);
    return([]);
  }
}

export default tableGet;