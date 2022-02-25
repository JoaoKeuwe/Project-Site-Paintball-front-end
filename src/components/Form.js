import React, { useState, useContext } from 'react';
import '../styles/Form.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import FormContext from '../context/FormContext.js'

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
  const [view, setView] = useState(1);
  const {setPlayer} = useContext(FormContext);

  const handleInputChange = (value) => {
    setForm(form => ({...form, ...value}))
  }

  const handleSubmit = () => {
    setPlayer(form);
    setForm(initiaFormState);
  }

  const firstForm = (
    <Container>
      <form id="firsForm">
        <Row>
          <Col sm={8}>
            <label htmlFor="inputName"> Nome:
              <br />
              <input 
                className = "InputForm"
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
                onChange={(e) => handleInputChange({age: e.target.value})} 
              />
            </label>
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="inputDescription"> Descrição:
              <br />
              <textarea
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
                className = "InputForm"
                value={form.picture}
                id="inputPicture"
                type="text"
                onChange={(e) => handleInputChange({picture: e.target.value})} 
              />
            </label>
          </Col>
        </Row>
        <div className="characteristicsContainer">
          <span>Características:</span>
          <Row>
            <Col>
              <label htmlFor="inputStrength"> Força:
                <br />
                <input
                  className="RangeInput"
                  value={form.str}
                  id="inputStrength"
                  type="range"
                  min="1"
                  max="10"
                  onChange={(e) => handleInputChange({str: e.target.value})}
                />
              </label>
            </Col>
            <Col>
              <label htmlFor="inputEquipment"> Equipamento:
                <br />
                <input
                  className="RangeInput"
                  value={form.eqp}
                  id="inputEquipment"
                  type="range"
                  min="1"
                  max="10"
                  onChange={(e) => handleInputChange({eqp: e.target.value})}
                />
              </label>
            </Col>
          </Row>
          <Row>
            <Col>
              <label htmlFor="inputMovement"> Movimentação:
                <br />
                <input
                  className="RangeInput"
                  value={form.mov}
                  id="inputMovement"
                  type="range"
                  min="1"
                  max="10"
                  onChange={(e) => handleInputChange({mov: e.target.value})}
                />
              </label>
            </Col>
            <Col>
              <label htmlFor="inputInteligence"> Inteligência:
                <br />
                <input
                  className="RangeInput"
                  value={form.int}
                  id="inputInteligence"
                  type="range"
                  min="1"
                  max="10"
                  onChange={(e) => handleInputChange({int: e.target.value})}
                />
            </label>
            </Col>
          </Row>
          <Row xs={2}>
            <Col>
              <label htmlFor="inputAim"> Mira:
                <br />
                <input
                  className="RangeInput"
                  value={form.aim}
                  id="inputAim"
                  type="range" 
                  min="1" 
                  max="10"
                  onChange={(e) => handleInputChange({aim: e.target.value})}
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
      </form>
    </Container>
  )

  const secondForm = (
    <Container>
      <form id="secondForm">
        <Row>
          <Col>
            <label htmlFor="inputTeam"> Time:
              <br />
              <input
                className = "InputForm"
                value={form.team} 
                id="inputTeam"
                type="tex"
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
        <div>
          Partidas:
          <Row>
            <Col>
              <input
                className = "InputForm smallInput"
                value={form.friendly}
                type="number"
                placeholder="Amistosos"
                onChange={(e) => handleInputChange({friendly: e.target.value})}
              />
            </Col>
            <Col>
              <input
                className = "InputForm smallInput"
                value={form.regional}
                type="number"
                placeholder="Regional"
                onChange={(e) => handleInputChange({regional: e.target.value})}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                className = "InputForm smallInput"
                value={form.state}
                type="number"
                placeholder="Estadual"
                onChange={(e) => handleInputChange({state: e.target.value})}
              />
            </Col>
            <Col>
              <input
                className = "InputForm smallInput"
                value={form.national}
                type="number"
                placeholder="Nacional"
                onChange={(e) => handleInputChange({national: e.target.value})}
              />
            </Col> 
          </Row>
          <Row xs={2}>
            <Col>
              <input
                className = "InputForm smallInput"
                value={form.international}
                type="number"
                placeholder="Internacional"
                onChange={(e) => handleInputChange({international: e.target.value})}
              />
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
      </form>
    </Container>
  )

  return (
    <div className="mainForm">
      {view === 1 && firstForm}
      {view === 2 && secondForm}
    </div>
  )
}

export default Form;
