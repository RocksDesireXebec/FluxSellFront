import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Col, Label, Input, Button, Row, FormGroup, InputGroupText, InputGroup, Container} from "reactstrap"
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
//css
import "../assets/css/login.css";

import logo from "../assets/img/mode.png"
const Login = () => {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [token, setToken] = useState({});

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  //Redirection de l'utilisateur après le login
  let navigate = useNavigate();

  function handleClick() {
    navigate("/main/categories");
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    const loginData = {
      username: email,
      password: password,
    };

    axios
      .post("https://agile-dawn-36258.herokuapp.com/login", loginData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        handleClick();
      })
      .catch((error) => console.log(error));
  };
  /*
  return token?.length > 0 ? (
    <h2>Vous etes authentifié</h2>
  ) : (
    <div>
      <form onSubmit={handleForm}>
        <fieldset>
          <legend>Connectez vous !</legend>
          <p>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="eengelbertdesire@gmail.com"
              onChange={handleEmail}
            />
          </p>
          <p>
            <label for="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handlePassword}
            />
          </p>
          <p>
            <button type="submit">Connexion</button>
          </p>
        </fieldset>
      </form>
      <p>
        Pas de compte ? <Link to="/register">Creez votre compte</Link>
      </p>
    </div>
  );*/
  return (
    <Container fluid className="login">
      <Row xs="1" className="contenu justify-content-center">
        <Col>
          <div className="avatar">
            <img
              alt="..."
              className="img-circle img-no-padding img-responsive"
              src={logo}
            />
          </div>
        </Col>
        <Col>
          <form onSubmit={handleForm}>
            <Row xs="1" className="justify-content-center">
              <Col>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <InputGroup>
                    <InputGroupText>
                      <i className="bi bi-at"></i>
                    </InputGroupText>
                    <Input
                      onChange={handleEmail}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="eengelbertdesire@gmail.com"
                    />
                  </InputGroup>
                </FormGroup>
              </Col>
              
              <Col>
                <Label for="password">Mot de passe</Label>
                <InputGroup>
                  <InputGroupText>
                    <i className="bi bi-lock"></i>
                  </InputGroupText>
                  <Input
                    onChange={handlePassword}
                    type="password"
                    id="password"
                    name="password"
                  />
                </InputGroup>
              </Col>
              <Col>
                <Button type="submit">
                  Connexion
                </Button>
              </Col>
            </Row>
          </form>
        </Col>
        <Col>
          Pas de compte ? <Link to="/register">Creez votre compte</Link>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
