import React from "react";
import Header from "../components/Header";
import "../styles/Table.css";
import tableGet from '../services/TableGet';
import { useEffect, useContext, useState } from 'react';
import FormContext from '../context/FormContext';

const Table = () => {
  const {setData, data, dataBase, setDataBase} = useContext(FormContext);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(()=> {
    getData();
  }, []);

  useEffect(()=>{
    const filterData = dataBase.filter((player)=>(
      player.playerName.toUpperCase().includes(nameFilter.toUpperCase())));
    setData(filterData)
  }, [nameFilter]);

  const getData = async () => {
    const fetchData = await tableGet();
    setData(fetchData);
    setDataBase(fetchData);
  }

  return (
    <>
      <Header />
      <div>
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
            </tr>
          </thead>
          <tbody>
            {
              data.length > 0 && (
                data.map((player)=>(
                  <tr key={player.id} className="playerRow">
                    <td>{player.id}</td>
                    <td>{player.playerName}</td>
                    <td>{player.role}</td>
                    <td>{player.team}</td>
                    <td>
                      <div>{`Primário: ${player.priWeapon}`}</div>
                      <div>{`Secundário: ${player.secWeapon}`}</div>
                    </td>
                    <td> 
                      <div>{`Força: ${player.str}`}</div>
                      <div>{`Movimentação: ${player.mov}`}</div>
                      <div>{`Mira: ${player.aim}`}</div>
                      <div>{`Equipamento: ${player.eqp}`}</div>
                      <div>{`Inteligência: ${player.int}`}</div>
                    </td>
                    <td> 
                      <div>{`Amistoso: ${player.friendly}`}</div>
                      <div>{`Regional: ${player.regional}`}</div>
                      <div>{`Estadual: ${player.state}`}</div>
                      <div>{`Nacional: ${player.national}`}</div>
                      <div>{`Internacional: ${player.international}`}</div>
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
