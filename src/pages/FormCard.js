import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Card from '../components/Card';

const FormCard = () => {
  return(
    <body>
      <Header/>
      <div style={{display: 'flex'}}>
        <div style={{width: '50%'}}><Form /></div>
        <div style={{width: '50%', margin: '0 auto', display: 'flex', justifyContent: 'center'}}><Card /></div>        
      </div>
    </body>
  )
}
export default FormCard;