import React from 'react';
import logo from '../image/logo.png';
import Header from '../components/Header';
import '../styles/Table.css'

class Table extends React.Component {
    render() { 
        return (
        <div className="table">
            <Header />
            <div>   
                <section >
                    <input type="text" className="input-header" />
                </section>

                <section className="informations">
                    <p>ID</p>
                    <p>Nome</p>
                    <p>Função</p>
                    <p>Time</p>
                    <p>Armamentos</p>
                    <p>Características</p>
                    <p>Partidas</p>
                </section>
            </div>
        </div>
        );
    }
}
 
export default Table;