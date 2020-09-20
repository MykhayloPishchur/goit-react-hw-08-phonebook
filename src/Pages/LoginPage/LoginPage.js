import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./loginpage.css";
import { Form, Button } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div className="loginPageContainer">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
