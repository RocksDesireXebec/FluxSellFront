import React, { useEffect, useState } from "react";
import SubTotal from "./SubTotal";
import { useStateValue } from "../StateProvider/StateProvider";
import { getBasketTotal } from "../Reducer/reducer";
import PanierProduit from "./PanierProduit";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Col, Input, Row } from "reactstrap";

import ban from "../assets/img/faces/clem-onojeghuo-4.jpg";

function Cart() {
  const [{ basket }, dispatch] = useStateValue();
  const [token, setToken] = useState({});

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);
  /*
  return token?.length > 0 ? (
    <div className="checkout">
      <div className="checkout_left">
        {basket.length > 0 &&
          basket.map((choix) => (
            <PanierProduit
              id={choix.id}
              libelle={choix.libelle}
              marque={choix.marque}
              price={choix.prix}
            />
          ))}
      </div>
      <div className="checkout_right">
        <SubTotal
          nbreItems={basket.length}
          prixTotal={getBasketTotal(basket)}
        />
      </div>
    </div>
  ) : (
    <>
      <Link to="/login">Connectez vous pour acceder à votre panier</Link><br />
      <Link to="/register">Ou sinon creer votre compte</Link>
    </>
  );*/

  return (
    <div
      className="container mt-5"
      style={{
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      {basket.length > 0 &&
        basket.map((choix) => (
          <Row xs="2" className="my-3">
            <Col>
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  display: "block",
                  borderRadius: "20px",
                  marginLeft: "20px",
                }}
                src={choix.capture}
              />
            </Col>
            <Col>
              <h5>{choix.libelle}</h5>
              <p>{choix.description}</p>
              <p>FCFA {choix.prix}</p>
              <ButtonGroup>
                <Button>
                  <i className="bi bi-plus"></i>
                </Button>
                <strong> 1 </strong>
                <Button>
                  <i className="bi bi-dash"></i>
                </Button>
              </ButtonGroup>
              <Button>
                <i className="bi bi-x-lg"></i>
              </Button>
            </Col>
          </Row>
        ))}
      <Row xs="1" className="my-3">
        <Col>Sous-total : FCFA 1200</Col>
        <Col>Frais: FCFA 500</Col>
        <Col>Total : FCFA 1700</Col>
      </Row>
      <Row xs="1" className="mt-3" style={{ marginBottom: "70px" }}>
        <Button
          className="py-2"
          style={{
            borderRadius: "20px",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Proceder au paiement
        </Button>
      </Row>
    </div>
  );
}

export default Cart;
