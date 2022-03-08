import React from "react";
import Header from "../components/Header";
import "../styles/Table.css";
import { useEffect, useContext, useState } from 'react';
import FormContext from '../context/FormContext';
import { AiFillDelete } from 'react-icons/ai';
import PlayerDelete from '../services/PlayerDelete';
import getData from '../helpers/getData';

const Table = ({history}) => {
  const {setData, data, dataList, setDataList, setForm} = useContext(FormContext);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(()=> {
    getData(setData, setDataList);
  }, []);

  useEffect(()=>{
    const filterData = data.filter((player)=>(
      player.playerName.toUpperCase().includes(nameFilter.toUpperCase())));
    setDataList(filterData)
  }, [nameFilter]);

  const handleDelete = async (id) => {
    await PlayerDelete(id);
    getData(setData, setDataList);
  }

  const handleUpdate = (player) => {
    setForm(player)
    history.push('/form')
  }

  return (
    <>
      <Header />
      <div className="container-table">
        <input 
          type="text"
          className="inputSearch"
          onChange={ (e) => { setNameFilter(e.target.value); } }
          value={ nameFilter }
        />
        <table className="playersTable">
          <thead className="tableHeader">
            <tr className="tableRow">
              <th>ID</th>
              <th>Nome</th>
              <th>Função</th>
              <th>Time</th>
              <th>Armamentos</th>
              <th>Características</th>
              <th>Partidas</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              dataList.length > 0 && (
                dataList.map((player)=>(
                  <tr 
                    key={player.id} 
                    className="playerRow"
                  >
                    <td onClick={()=>handleUpdate(player)}>{player.id}</td>
                    <td onClick={()=>handleUpdate(player)}>{player.playerName}</td>
                    <td onClick={()=>handleUpdate(player)}>{player.role}</td>
                    <td onClick={()=>handleUpdate(player)}>{player.team}</td>
                    <td onClick={()=>handleUpdate(player)}>
                      <div>{`Primário: ${player.priWeapon}`}</div>
                      <div>{`Secundário: ${player.secWeapon}`}</div>
                    </td>
                    <td onClick={()=>handleUpdate(player)}> 
                      <div>{`Força: ${player.str}`}</div>
                      <div>{`Movimentação: ${player.mov}`}</div>
                      <div>{`Mira: ${player.aim}`}</div>
                      <div>{`Equipamento: ${player.eqp}`}</div>
                      <div>{`Inteligência: ${player.int}`}</div>
                    </td>
                    <td onClick={()=>handleUpdate(player)}> 
                      <div>{`Amistoso: ${player.friendly}`}</div>
                      <div>{`Regional: ${player.regional}`}</div>
                      <div>{`Estadual: ${player.state}`}</div>
                      <div>{`Nacional: ${player.national}`}</div>
                      <div>{`Internacional: ${player.international}`}</div>
                    </td>
                    <td>
                      <button 
                        className="deleteButton"
                        onClick={()=>handleDelete(player.id)}
                      >
                        <AiFillDelete/>
                      </button>
                    </td>
                  </tr>
                ))
              )
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
