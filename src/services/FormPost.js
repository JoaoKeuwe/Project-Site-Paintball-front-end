import api from '../services/Api';

const formPost = async (player) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type' : 'application/json',
    'Authorization': token
  }
  try {
    const apiPost = await api.post('/player', player, {headers});
    console.log(apiPost);
  } catch (error) {
    console.log(error.response);
  }
}

export default formPost;
