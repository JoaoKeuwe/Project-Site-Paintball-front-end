import React from 'react';
import logo from '../image/logo.png';

class Table extends React.Component {
    render() { 
        return (
            <div>
            <header>
                <p>Home</p>
                <p>Cadastro</p>
                <p>Card</p>
                <p>Tabela</p>
                <p>Logout</p>
                <img src={logo} alt="Logo" />
            </header>

            <section>
                <input type="text" />
            </section>

            <section>
                <p>ID</p>
                <p>Nome</p>
                <p>Função</p>
                <p>Time</p>
                <p>Armamentos</p>
                <p>Características</p>
                <p>Partidas</p>
            </section>

            <div>
                <p>adversário 1</p>
                <p>adversário 2</p>
                <p>adversário 3</p>
                <p>adversário 4</p>
                <p>adversário 5</p>
                <p>adversário 6</p>
                <p>adversário 7</p>
                <p>adversário 8</p>
                <p>adversário 9</p>
            </div>
            </div>
        );
    }
}
 
export default Table;