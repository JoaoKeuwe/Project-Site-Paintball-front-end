import jwt_decode from 'jwt-decode';

const verifyToken = {
  expire: (history)=>{
    try {
      const token = localStorage.getItem('token');
      const decode = jwt_decode(token);
      if (decode.expires <= Date.now()) {
        alert('faça login para continuar');
        localStorage.setItem('token', '');
        history.push('/');
      }
    } catch(e) {
      localStorage.setItem('token', '');
      history.push('/');
    }
  },
  empty: (history) => {
    const token = localStorage.getItem('token');
    if (!token || token === '') {
      alert('faça login para continuar');
      history.push('/');
    }
  }
}

export default verifyToken;