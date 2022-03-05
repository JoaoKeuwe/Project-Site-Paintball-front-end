import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

const FormCard = () => {
  return(
    <>
      <Header/>
      <div style={{display: 'flex'}}>
        <Form />
        <Form />
      </div>
    </>
  )
}
export default FormCard;