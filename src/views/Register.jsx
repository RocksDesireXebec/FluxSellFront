import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import axios from "axios";
//Generation des pays
import countries from "i18n-iso-countries";
//Langue
import frLocale from "i18n-iso-countries/langs/fr.json";

import logo from "../assets/img/mode.png";

//css
import "../assets/css/register.css";

const Register = () => {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [nom, setNom] = useState({});
  const [prenom, setPrenom] = useState({});
  const [telephone, setTelephone] = useState({});
  const [paysDeResidence, setPaysDeResidence] = useState({});

  //On enregistre les langues que l'on souhaite utiliser
  countries.registerLocale(frLocale);
  //Retourne un objet et non une liste
  const countryObj = countries.getNames("fr", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleNom = (e) => {
    setNom(e.target.value);
  };

  const handlePrenom = (e) => {
    setPrenom(e.target.value);
  };
  const handleTelephone = (e) => {
    setTelephone(e.target.value);
  };

  const handlePaysDeResidence = (e) => {
    setPaysDeResidence(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
      nom: nom,
      prenom: prenom,
      telephone: telephone,
      paysDeResidence: paysDeResidence,
    };

    axios
      .post("https://127.0.0.1:8000/api/register", userData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container fluid className="register">
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
                      <i class="bi bi-at"></i>
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
                <Label for="nom">Nom</Label>
                <InputGroup>
                  <InputGroupText>
                    <i className="bi bi-person-circle"></i>
                  </InputGroupText>
                  <Input
                    onChange={handleNom}
                    type="text"
                    id="nom"
                    name="nom"
                    placeholder="RocksDXebec"
                  />
                </InputGroup>
              </Col>
              <Col>
                <Label for="prenom">Prenom</Label>
                <InputGroup>
                  <InputGroupText>
                    <i className="bi bi-person-circle"></i>
                  </InputGroupText>
                  <Input
                    onChange={handlePrenom}
                    type="text"
                    id="prenom"
                    name="prenom"
                    placeholder="Specter"
                  />
                </InputGroup>
              </Col>
              <Col>
                <Label for="tel">Numéro de téléphone </Label>
                <InputGroup>
                  <InputGroupText>
                    <i className="bi bi-telephone"></i>
                  </InputGroupText>
                  <Input
                    onChange={handleTelephone}
                    type="text"
                    id="tel"
                    name="tel"
                    placeholder=""
                  />
                </InputGroup>
              </Col>
              <Col>
                <Label for="pays">Pays de résidence</Label>
                <InputGroup>
                  <InputGroupText>
                    <i className="bi bi-globe"></i>
                  </InputGroupText>
                  <Input
                    type="select"
                    value={paysDeResidence}
                    onChange={handlePaysDeResidence}
                    id="pays"
                    name="pays"
                  >
                    {!!countryArr?.length &&
                      countryArr.map(({ label, value }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                  </Input>
                </InputGroup>
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
                <Label for="password2">Confirmez mot de passe</Label>
                <InputGroup>
                  <InputGroupText>
                    <i className="bi bi-lock"></i>
                    <i className="bi bi-lock"></i>
                  </InputGroupText>
                  <Input type="password" id="password2" name="password2" />
                </InputGroup>
              </Col>
              <Col>
                <i className="bi bi-info"></i>
                <Label for="agree">Acceptez les termes </Label>
                <Input type="checkbox" id="agree" name="agree" />
              </Col>
              <Col>
                <Button type="submit">
                  Creer votre compte
                </Button>
              </Col>
            </Row>
          </form>
        </Col>
        <Col>Continuez avec : <i className="bi bi-facebook success"></i> <i className="bi bi-google"></i> <i className="bi bi-twitter"></i> <i className="bi bi-github"></i></Col>
      </Row>
    </Container>
  );
};

export default Register;
