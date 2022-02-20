import React from 'react';
import logo from '../image/logo.png';
import '../styles/Table.css'

class Table extends React.Component {
    render() { 
        return (
            <div className="table">
            <header className="table-header">
            <img src={logo} alt="Logo" className="picture-logo"/>
                <p>Home</p>
                <p>Cadastro</p>
                <p>Card</p>
                <p>Tabela</p>
                <p>Logout</p>
            </header>

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
           
               {/*   */}
             {/*    <div className="paragraphs">
                <p>adversário 1</p>
                <p>adversário 2</p>
                <p>adversário 3</p>
                <p>adversário 4</p>
                <p>adversário 5</p>
                <p>adversário 6</p>
                <p>adversário 7</p>
                <p>adversário 8</p>
                <p>adversário 9</p>
                </div> */}
            </section>
            </div>
        );
    }
}
 
export default Table;