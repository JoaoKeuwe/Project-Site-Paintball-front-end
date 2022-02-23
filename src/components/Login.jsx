import React from 'react';
import logo from '../image/logo.png';
import '../styles/Login.css'


class Login extends React.Component {

    handleClick = () => {
        const {history} = this.props;
        history.push('/form')
    }
    render() { 
        return (
            <section className="login">
                <article >
                    <img 
                    src={logo} alt="logo imagem"
                    className="image-login" />
                </article>
                <form>
                    <label className="label-email" htmlFor="input-email" className="input-email">
                        
                    <input type="text" placeholder="Email" name="input-email" id="input-email" className="input-email" />
                    </label>

                    <label htmlFor="input-password"
                    className="input-password">
                      
                    <input type="password" placeholder="Enter your password"className="input-password" name="input-passwordl" id="input-password" />
                    </label>

                    <button
                    type="submit"
                    className="button-login"
                    onClick={this.handleClick}
                    >

                        Entrar

                    </button>
                </form>
            </section>
        );
    }
}
 
export default Login;