import { Form, Button } from "react-bootstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../Redux/auth";
import { compose } from "redux";
import withAuthRedirect from "../../Common/hoc/withAuthRedirect";
import "bootstrap/dist/css/bootstrap.min.css";
import "./loginpage.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  // handleChange = ({ name, value }) => {
  //   this.setState({ [name]: value });
  // };

  handleChange = (e) =>
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="loginPageContainer">
        <Form onSubmit={this.handleSubmit}>
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
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default compose(
  withAuthRedirect,
  connect(null, mapDispatchToProps)
)(LoginPage);
