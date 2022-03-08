import React from "react";
import logo from "../image/logo.png";
import "../styles/Login.css";
import loginPost from "../services/Login";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleClick = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const result = await loginPost(email, password);
    if (result.status !== 200) {
      alert("deu ruim");
    } else {
      localStorage.setItem("token", result.data);
      const { history } = this.props;
      history.push("/form");
    }
  };

  takeInfoUser = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  /*  validEmail = (email) => {
            const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
        return emailRegex.test(email)
    } */
  render() {
    return (
      
        
      
      <section className="login">
        <article>
          <img src={logo} alt="logo imagem" className="image-login" />
        </article>

        <form className="label-email">

          <label htmlFor="email" className="email">
            <input
              type="text"
              placeholder="User Name"
              name="email"
              id="email"
              autoComplete="off"
              onChange={this.takeInfoUser}
              className="input-email"
            />
          </label>

          <label htmlFor="input-password" className="password">
            <input
              type="password"
              placeholder="Enter your password"
              className="input-password"
              name="password"
              autoComplete="off"
              onChange={this.takeInfoUser}
              id="password"
            />
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
