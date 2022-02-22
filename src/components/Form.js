import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

const initiaFormState = {
  playerName: '',
  picture: '',
  age: 0,
  description: '',
  team: '',
  role: '',
  priWeapon: '',
  secWeapon: '',
  str: 0,
  mov: 0,
  int: 0,
  aim: 0,
  eqp: 0,
  friendly: 0,
  regional: 0,
  state: 0,
  national: 0,
  international: 0
}

function Form () {

  const [form, setForm] = useState(initiaFormState);

  const handleInputChange = (value) => {
    setForm(form => ({...form, ...value}))
  }

  return (
    <div>
      <form id="firsForm">
        <label htmlFor="inputName"> Nome:
          <input 
            id="inputName"
            type="tex"
            placeholder="Humberto Silva"
            onChange={(e) => handleInputChange({playerName: e.target.value})}
          />
        </label>
        <label htmlFor="inputAge"> Idade:
          <input
            id="inputAge"
            type="number"
            onChange={(e) => handleInputChange({age: e.target.value})} 
          />
        </label>
        <label htmlFor="inputDescription"> Descrição
          <textarea
            id="inputDescription"
            onChange={(e) => handleInputChange({description: e.target.value})}
          />
        </label>
        <label htmlFor="inputPicture"> Foto:
          <input id="inputPicture" type="file" />
        </label>
        <div>
          <span>Características:</span>
          <label htmlFor="inputStrength"> Força:
            <input
              id="inputStrength"
              type="range"
              min="1"
              max="10"
              onChange={(e) => handleInputChange({str: e.target.value})}
            />
          </label>
          <label htmlFor="inputEquipment"> Equipamento:
            <input
              id="inputEquipment"
              type="range"
              min="1"
              max="10"
              onChange={(e) => handleInputChange({eqp: e.target.value})}
            />
          </label>
          <label htmlFor="inputMovement"> Movimentação:
            <input
              id="inputMovement"
              type="range"
              min="1"
              max="10"
              onChange={(e) => handleInputChange({mov: e.target.value})}
            />
          </label>
          <label htmlFor="inputInteligence"> Inteligência:
            <input
              id="inputInteligence"
              type="range"
              min="1"
              max="10"
              onChange={(e) => handleInputChange({int: e.target.value})}
            />
          </label>
          <label htmlFor="inputAim"> Mira:
            <input
              id="inputAim"
              type="range" 
              min="1" 
              max="10"
              onChange={(e) => handleInputChange({aim: e.target.value})}
            />
          </label>
        </div>
        <button type="button">Próximo</button>
      </form>

      <form id="secondForm">
        <label htmlFor="inputTeam"> Time:
          <input 
            id="inputTeam"
            type="tex"
            placeholder="Sombra Jade"
            onChange={(e) => handleInputChange({team: e.target.value})}
          />
        </label>
        <label htmlFor="inputRole"> Função:
          <select
            id="inputRole"
            onChange={(e) => handleInputChange({role: e.target.value})}
          >
            <option value="Burro">Burro</option>
            <option value="Capitão">Capitão</option>
            <option value="Sniper">Sniper</option>
            <option value="Lurker">Lurker</option>
            <option value="Coringa">Coringa</option>
          </select>
        </label>
        <label htmlFor="inputPriWeapon"> Armamento Primário:
          <select
            id="inputPriWeapon"
            onChange={(e) => handleInputChange({priWeapon: e.target.value})}
            >
            <option value="pistol">pistol</option>
            <option value="smg">smg</option>
            <option value="assault rifle">assault rifle</option>
            <option value="niper rifle">niper rifle</option>
          </select>
        </label>
        <label htmlFor="inputSecWeapon"> Armamento Secundário:
          <select 
            id="inputSecWeapon"
            onChange={(e) => handleInputChange({secWeapon: e.target.value})}
          >
            <option value="pistol">pistol</option>
            <option value="smg">smg</option>
            <option value="assault rifle">assault rifle</option>
            <option value="niper rifle">niper rifle</option>
          </select>
        </label>
        <div>
          Partidas:
          <input
            type="number"
            placeholder="Amistosos"
            onChange={(e) => handleInputChange({friendly: e.target.value})}
          />
          <input
            type="number"
            placeholder="Regional"
            onChange={(e) => handleInputChange({regional: e.target.value})}
          />
          <input
            type="number"
            placeholder="Estadual"
            onChange={(e) => handleInputChange({state: e.target.value})}
          />
          <input
            type="number"
            placeholder="Nacional"
            onChange={(e) => handleInputChange({national: e.target.value})}
          />
          <input
            type="number"
            placeholder="Internacional"
            onChange={(e) => handleInputChange({international: e.target.value})}
          />
        </div>
        <button type="button">Voltar</button>
        <button type="button">Finalizar</button>
      </form>
    </div>
  )
}

export default Form;
