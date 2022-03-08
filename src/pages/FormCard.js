import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Card from '../components/Card';

const FormCard = ({history}) => {
  return(
    <body>
      <Header/>
      <div style={{display: 'flex'}}>
        <div style={{width: '50%'}}><Form history={ history }/></div>
        <div style={{width: '50%', display: 'flex', justifyContent: 'center'}}><Card /></div>
      </div>
    </body>
  )
}
export default FormCard;