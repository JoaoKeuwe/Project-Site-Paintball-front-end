import React from 'react';
import logo from '../image/logo.png';
import '../styles/Login.css'



class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            isValid: false
        }
    }

    handleClick = () => {
        const {email, password} = this.state;
        const {history} = this.props;

        if (this.validEmail(email)) this.setState ({isValid: true}, () => {
            const {isValid} = this.state;
            if (isValid) history.push('/form')
        })

       

        localStorage.setItem("infoUser", JSON.stringify({email, password}));
    
    }

    takeInfoUser = (event) => {
        const {value, name} = event.target
        this.setState ({
            [name]:value
        })
    }

        validEmail = (email) => {
            const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
        return emailRegex.test(email)
        

    }
    


    render() { 
        return (
            <section className="login">

                <article >

                    <img 
                    src={logo} alt="logo imagem"
                    className="image-login" />

                </article>

                <form className="label-email" >

                    <label 
                    htmlFor="email" className="input-email">
                      
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    
                    onChange={this.takeInfoUser}
                    className="input-email"
                    />
                   

                    </label>

                    <label htmlFor="input-password"
                    className="input-password">
                     
                    <input 
                    type="password" 
                    placeholder="Enter your password"
                    className="input-password" 
                    name="password"
                    onChange={this.takeInfoUser}
                    id="password" />
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