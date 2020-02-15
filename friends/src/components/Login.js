import React from "react";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>Sign-in</h3>
        <form className="form-style" onSubmit={this.handleLogin}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label className="label-style">Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button className="button-style">Log in</button>
        </form>
      </div>
    );
  };
}

export default Login;