import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

const FormCard = ({history}) => {
  return(
    <>
      <Header/>
      <div style={{display: 'flex'}}>
        <Form history={ history }/>
        <Form />
      </div>
    </>
  )
}
export default FormCard;