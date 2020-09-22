import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import withAuthRedirect from "../../Common/hoc/withAuthRedirect";
import authOperations from "../../Redux/auth/auth-operations";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./registerpage.css";

class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="loginPageContainer">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={this.handleChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={password}
              onChange={this.handleChange}
              type="password"
              placeholder="Enter Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRegister: (credentials) =>
    dispatch(authOperations.registerUser(credentials)),
});

export default compose(
  withAuthRedirect,
  connect(null, mapDispatchToProps)
)(RegisterPage);
