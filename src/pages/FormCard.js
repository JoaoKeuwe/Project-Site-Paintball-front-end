import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Card from '../components/Card';

const FormCard = () => {
  return(
    <>
      <Header/>
      <div style={{display: 'flex'}}>
        <Form />
        <Card />
      </div>
    </>
  )
}
export default FormCard;