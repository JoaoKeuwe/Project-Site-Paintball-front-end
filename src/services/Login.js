import api from '../services/Api'

const loginPost =  async (username, password) => {

    try{
        const apiPost = await api.post('/login', {username, password})
        
        const response = {
          data: apiPost.data,
          status: apiPost.status
        }
        return response
} catch ({response}) {
    const result = {
        data: response.data,
        status: response.status
    }
   
   return result;
}
}

export default loginPost;