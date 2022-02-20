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


            </div>
        );
    }
}
 
export default Table;