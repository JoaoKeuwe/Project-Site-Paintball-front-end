import React from "react";
import Header from "../components/Header";
import "../styles/Table.css";
import tableGet from '../services/TableGet';
import { useEffect } from 'react';

const Table = () => {
  useEffect(()=> {
    getData();
  }, []);

  const getData = async () => {
    const data = await tableGet();
    console.log(data);
  }

  return (
    <>
      <Header />
      <div>
        <input type="text" className="input-header" />
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
            <tr className="playerRow">
              <td>05</td>
              <td>Marina</td>
              <td>Sniper</td>
              <td>gremio</td>
              <td>
                <div>Primário: rifle</div>
                <div>Secundário: Pistola</div>
              </td>
              <td> 
                <div>força: 8</div>
                <div>movimentação: 5</div>
                <div>mira: 3</div>
                <div>equipamento: 2</div>
                <div>inteligência: 6</div>
              </td>
              <td> 
                <div>amistoso: 25</div>
                <div>regional: 13</div>
                <div>estadual: 5</div>
                <div>nacional: 2</div>
                <div>internacional: 0</div>
              </td>
            </tr>
            <tr className="playerRow">
              <td>05</td>
              <td>Marina</td>
              <td>Sniper</td>
              <td>gremio</td>
              <td>
                <div>Primário: rifle</div>
                <div>Secundário: Pistola</div>
              </td>
              <td> 
                <div>força: 8</div>
                <div>movimentação: 5</div>
                <div>mira: 3</div>
                <div>equipamento: 2</div>
                <div>inteligência: 6</div>
              </td>
              <td> 
                <div>amistoso: 25</div>
                <div>regional: 13</div>
                <div>estadual: 5</div>
                <div>nacional: 2</div>
                <div>internacional: 0</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
