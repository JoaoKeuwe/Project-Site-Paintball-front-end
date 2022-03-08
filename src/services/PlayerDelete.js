import api from '../services/Api';

const PlayerDelete = async (id) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type' : 'application/json',
    'Authorization': token
  }
  try {
    const apiPost = await api.delete(`/player/${id}`, {headers});
    console.log(apiPost);
  } catch (error) {
    console.log(error.response);
  }
}

export default PlayerDelete;