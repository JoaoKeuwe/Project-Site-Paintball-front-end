import React, {useEffect} from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Card from '../components/Card';
import verifyToken from '../services/verifyToken';

const FormCard = ({history}) => {
  useEffect(()=>{
    verifyToken.empty(history);
  }, [history]);
  useEffect(()=>{
    verifyToken.expire(history);
  }, [history]);

  return(
    <>
      <Header/>
      <div style={{display: 'flex'}}>
        <div style={{width: '50%'}}><Form history={ history }/></div>
        <div style={{width: '50%', display: 'flex', justifyContent: 'center'}}><Card /></div>
      </div>
    </>
  )
}
export default FormCard;