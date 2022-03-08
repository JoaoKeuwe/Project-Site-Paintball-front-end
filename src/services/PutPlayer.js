import api from '../services/Api';

const PutPlayer = async (id, player) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type' : 'application/json',
    'Authorization': token
  }
  try {
    const apiPost = await api.put(`/player/${id}`, player, {headers});
    console.log(apiPost);
  } catch (error) {
    console.log(error.response);
  }
}

export default PutPlayer;