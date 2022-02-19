import React from 'react';

class Form extends React.Component{
  render(){
    return (
      <div>
        <form>
          <label htmlFor="inputName"> Nome:
            <input id="inputName" type="tex" placeholder="Humberto Silva" />
          </label>
          <label htmlFor="inputPicture"> Foto:
            <input id="inputPicture" type="file" />
          </label>
          <label htmlFor="inputAge"> Idade:
            <input id="inputAge" type="number" />
          </label>
          <label htmlFor="inputDescription"> Descrição
            <textarea id="inputDescription" />
          </label>
        </form>
      </div>
    )
  }
}

export default Form;