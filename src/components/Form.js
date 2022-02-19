import React from 'react';

class Form extends React.Component{
  render(){
    return (
      <div>
        <form id="Firs_Form">
          <label htmlFor="inputName"> Nome:
            <input id="inputName" type="tex" placeholder="Humberto Silva" />
          </label>
          <label htmlFor="inputAge"> Idade:
            <input id="inputAge" type="number" />
          </label>
          <label htmlFor="inputDescription"> Descrição
            <textarea id="inputDescription" />
          </label>
          <label htmlFor="inputPicture"> Foto:
            <input id="inputPicture" type="file" />
          </label>
          <div>
            <span>Características:</span>
            <label htmlFor="inputStrength"> Força:
              <input id="inputStrength" type="range" min="1" max="10"/>
            </label>
            <label htmlFor="inputEquipment"> Equipamento:
              <input id="inputEquipment" type="range" min="1" max="10"/>
            </label>
            <label htmlFor="inputMovement"> Movimentação:
              <input id="inputMovement" type="range" min="1" max="10"/>
            </label>
            <label htmlFor="inputInteligence"> Inteligência:
              <input id="inputInteligence" type="range" min="1" max="10"/>
            </label>
            <label htmlFor="inputAim"> Mira:
              <input id="inputAim" type="range" min="1" max="10"/>
            </label>
          </div>
          <button type="button">Next</button>
        </form>
        <form id="Second_Form">
          <label htmlFor="inputTeam"> Time:
            <input id="inputTeam" type="tex" placeholder="Sombra Jade" />
          </label>
        </form>
      </div>
    )
  }
}

export default Form;
