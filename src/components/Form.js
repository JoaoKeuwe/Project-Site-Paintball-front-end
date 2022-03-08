import React, { useState, useContext } from 'react';
import FormContext from '../context/FormContext.js'
import { initiaFormState } from '../helpers/constans.js';
import FormReact from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/Form.css';
import formPost from '../services/FormPost';
import PutPlayer from '../services/PutPlayer.js';
import getData from '../helpers/getData';

const Form = ({history}) => {
  const [view, setView] = useState(1);
  const {setPlayer, form, setForm, setData, setDataList} = useContext(FormContext);

  const handleInputChange = (value) => {
    setForm(form => ({...form, ...value}))
  }
  
  const handleSubmit = () => {
    setPlayer(form);
    if (form.id === undefined) {
      formPost(form)
    } else {
      PutPlayer(form.id, {
        playerName: form.playerName,
        picture: form.picture,
        age: +form.age,
        description: form.description,
        team: form.team,
        role: form.role,
        priWeapon: form.priWeapon,
        secWeapon: form.secWeapon,
        str: +form.str,
        mov: +form.mov,
        int: +form.int,
        aim: +form.aim,
        eqp: +form.eqp,
        friendly: +form.friendly,
        regional: +form.regional,
        state: +form.state,
        national: +form.national,
        international: +form.international
      });
    }
    setForm(initiaFormState);
    getData(setData, setDataList);
    history.push('/table');
  }

  const firstForm = (
    <FormReact id="firstForm">
      <Row>
        <Col sm={8}>
          <label htmlFor="inputName"> Nome:
            <br />
            <input 
              className = "InputForm"
              maxLength="255"
              value={form.playerName} 
              id="inputName"
              type="tex"
              placeholder="Humberto Silva"
              onChange={(e) => handleInputChange({playerName: e.target.value})}
            />
          </label>
        </Col>
        <Col sm={4}>
          <label htmlFor="inputAge"> Idade:
            <br />
            <input
              className = "InputForm"
              value={form.age}
              id="inputAge"
              type="number"
              min="0"
              onChange={(e) => handleInputChange({age: +e.target.value})} 
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="inputDescription"> Descrição:
            <br />
            <textarea
              maxLength="255"
              className = "InputForm"
              value={form.description}
              id="inputDescription"
              onChange={(e) => handleInputChange({description: e.target.value})}
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="inputPicture"> Foto:
            <br />
            <input
              maxLength="255"
              className = "InputForm"
              value={form.picture}
              id="inputPicture"
              type="text"
              onChange={(e) => handleInputChange({picture: e.target.value})} 
            />
          </label>
        </Col>
      </Row>
      <div className="partidas">Características:</div>
      <div className="characteristicsContainer">
        <Row>
          <Col>
            <label htmlFor="inputStrength"> Força: 
              <span>{` ${form.str}`}</span>
              <br />
              <input
                className="RangeInput"
                value={form.str}
                id="inputStrength"
                type="range"
                min="1"
                max="10"
                onChange={(e) => handleInputChange({str: +e.target.value})}
              />
            </label>
          </Col>
          <Col>
            <label htmlFor="inputEquipment"> Equipamento:
              <span>{` ${form.eqp}`}</span>
              <br />
              <input
                className="RangeInput"
                value={form.eqp}
                id="inputEquipment"
                type="range"
                min="1"
                max="10"
                onChange={(e) => handleInputChange({eqp: +e.target.value})}
              />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="inputMovement"> Movimentação:
              <span>{` ${form.mov}`}</span>
              <br />
              <input
                className="RangeInput"
                value={form.mov}
                id="inputMovement"
                type="range"
                min="1"
                max="10"
                onChange={(e) => handleInputChange({mov: +e.target.value})}
              />             
            </label>
          </Col>
          <Col>
            <label htmlFor="inputInteligence"> Inteligência:
              <span>{` ${form.int}`}</span> 
              <br />
              <input
                className="RangeInput"
                value={form.int}
                id="inputInteligence"
                type="range"
                min="1"
                max="10"
                onChange={(e) => handleInputChange({int: +e.target.value})}
              />
          </label>
          </Col>
        </Row>
        <Row xs={2}>
          <Col>
            <label htmlFor="inputAim"> Mira:
              <span>{` ${form.aim}`}</span>
              <br />
              <input
                className="RangeInput"
                value={form.aim}
                id="inputAim"
                type="range" 
                min="1" 
                max="10"
                onChange={(e) => handleInputChange({aim: +e.target.value})}
              />
            </label>
          </Col>
        </Row>
      </div>
      <button
        className="BlueButton"
        type="button"
        onClick={()=>{setView(2)}}
      >Próximo</button>
    </FormReact>
  )

  const secondForm = (
    <FormReact id="secondForm">
      <Row>
        <Col>
          <label htmlFor="inputTeam"> Time:
            <br />
            <input
              className = "InputForm"
              value={form.team} 
              id="inputTeam"
              type="tex"
              maxLength="255"
              placeholder="Sombra Jade"
              onChange={(e) => handleInputChange({team: e.target.value})}
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="inputRole"> Função:
            <br />
            <select
              className = "InputForm"
              value={form.role}
              id="inputRole"
              onChange={(e) => handleInputChange({role: e.target.value})}
            >
              <option value="burro">Burro</option>
              <option value="capitão">Capitão</option>
              <option value="sniper">Sniper</option>
              <option value="lurker">Lurker</option>
              <option value="coringa">Coringa</option>
            </select>
          </label>
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="inputPriWeapon"> Armamento Primário:
            <br />
            <select
              className = "InputForm smallInput"
              value={form.priWeapon}
              id="inputPriWeapon"
              onChange={(e) => handleInputChange({priWeapon: e.target.value})}
              >
              <option value="pistol">pistol</option>
              <option value="smg">smg</option>
              <option value="assault rifle">assault rifle</option>
              <option value="sniper rifle">sniper rifle</option>
            </select>
          </label>
        </Col>
        <Col>
          <label htmlFor="inputSecWeapon"> Armamento Secundário:
          <br />
            <select 
              className = "InputForm smallInput"
              value={form.secWeapon}
              id="inputSecWeapon"
              onChange={(e) => handleInputChange({secWeapon: e.target.value})}
            >
              <option value="pistol">pistol</option>
              <option value="smg">smg</option>
              <option value="assault rifle">assault rifle</option>
              <option value="sniper rifle">sniper rifle</option>
            </select>
          </label>
        </Col>
      </Row>
      <div className="partidas">Partidas:</div>
      <div >
        <Row>
          <Col>
            <label htmlFor="inputFriendly">
              Amistosos:
              <br/>
              <input
                id="inputFriendly"
                className = "InputForm smallInput"
                value={form.friendly}
                type="number"
                min="0"
                onChange={(e) => handleInputChange({friendly: +e.target.value})}
              />
            </label>
          </Col>
          <Col>
            <label htmlFor="inputRegional"> Regional:
              <br/>
              <input
                id="inputRegional"
                className = "InputForm smallInput"
                value={form.regional}
                type="number"
                min="0"
                onChange={(e) => handleInputChange({regional: +e.target.value})}
              />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="inputState"> Estadual:
              <br/>
              <input
                className = "InputForm smallInput"
                value={form.state}
                type="number"
                min="0"
                id="inputState"
                onChange={(e) => handleInputChange({state: +e.target.value})}
              />
            </label>
          </Col>
          <Col>
            <label htmlFor="inputNational"> Nacional:
              <br />
              <input
                id="inputNational"
                className = "InputForm smallInput"
                value={form.national}
                type="number"
                min="0"
                onChange={(e) => handleInputChange({national: +e.target.value})}
              />
            </label>
          </Col> 
        </Row>
        <Row xs={2}>
          <Col>
            <label htmlFor="inputInternational" >Internacional
              <br />
              <input
                className = "InputForm smallInput"
                id="inputInternational"
                value={form.international}
                type="number"
                min="0"
                onChange={(e) => handleInputChange({international: +e.target.value})}
              />
            </label>
          </Col> 
        </Row>
      </div>
      <Row>
        <Col>
          <button
          className="BlueButton"
          type="button"
          onClick={()=>{setView(1)}}
          >
            Voltar
          </button>
        </Col>
        <Col>
          <button 
            type="button" onClick={handleSubmit}
            className="GreenButton"
          >
            Finalizar
          </button>
        </Col> 
      </Row>
    </FormReact>
  )

  return (
    <div className="mainForm">
      {view === 1 && firstForm}
      {view === 2 && secondForm}
    </div>
  )
}

export default Form;
