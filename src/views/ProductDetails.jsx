import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../StateProvider/StateProvider";
import { Button, ButtonGroup, Col, Input, Row, Spinner } from "reactstrap";
import ban from "../assets/img/faces/clem-onojeghuo-4.jpg";

function ProductDetails() {
  let params = useParams();
  const idP = params.idP;
  const [produit, setProduit] = useState({});
  const [{ basket }, dispatch] = useStateValue();
  //Recuperation du token
  const [token, setToken] = useState({});
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  //Redirection de l'utilisateur dans le cas ou non authentifié
  let navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }
  /*
  useEffect(() => {
    axios
      .get(`https://127.0.0.1:8000/categorie/${idC}/produits/${idP}`)
      .then((response) => {
        setProduit(response.data);
      })
      .catch((error) => console.log(error));
  }, []); */

  //Recherche de la categorie choisie, ensuite extraction des routes des produits de cette catégorie
  useEffect(() => {
    axios
      .get(`https://agile-dawn-36258.herokuapp.com/produits/${idP}`)
      .then((response) => {
        const result = response.data;
        setProduit(() => result);
      })
      .catch((error) => console.log(error));
  }, []);

  const addToBasket = () => {
    //if (token?.length > 0) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: produit.id,
          libelle: produit.libelle,
          etoile: produit.etoile,
          note: produit.note,
          description: produit.description,
          capture: produit.capture,
          marque: produit.marque,
          prix: produit.prix,
        },
      });
    //} else {
    //  handleClick();
    //}
  };

  return (
    <>
      {/*
    <div>
      <img src="#" alt="image du produit" />
      <br />
      Nom du produit : {produit.libelle} <br />
      Marque : {produit.marque} <br />
      Prix : {produit.prix} FCFA <br />
      Etoiles : {produit.etoile} <br />
      Description : {produit.description} <br />
      Note : {produit.note} <br />
      <Link to={`/main/achat/${produit.id}`}>Commander maintenant</Link>
      <button onClick={addToBasket}>Ajouter au panier</button>
    </div> */}
      {Object.keys(produit).length > 0 ? (
        <div
          className="container mt-5 mb-5"
          style={{
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Row xs="2" className="" style={{ marginTop: "60px" }}>
            <Col style={{}}>
              <i className="bi bi-chevron-left"></i>
            </Col>

            <Col className=" text-right" style={{ textAlign: "right" }}>
              <i className="bi bi-heart"></i>
            </Col>
          </Row>
          <Row xs="1" className="productDetails px-0">
            <Col className="px-2">
              <img
                style={{
                  height: "225px",
                  width: "100%",
                  display: "block",
                  borderRadius: "20px",
                  marginLeft: "20px",
                }}
                src={produit.capture}
              />
            </Col>
            <Col className="px-2">
              <h5 className="text-center">{produit.libelle}</h5>
              <p>{produit.description}</p>
            </Col>
            <Col className="py-2">
              <ButtonGroup>
                <Button>
                  <i className="bi bi-plus"></i>
                </Button>
                <Input type="text" value="1" />
                <Button>
                  <i className="bi bi-dash"></i>
                </Button>
              </ButtonGroup>
            </Col>
            <Col className="py-2">
              <Button onClick={addToBasket}>Ajouter au panier</Button>
              <Link to={`/main/achat/${produit.id}`}>Commander maintenant</Link>
            </Col>
          </Row>
        </div>
      ) : (
        <div
          className="container mt-5 mb-5"
          style={{
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Spinner color="primary" type="grow" className="py-5 mt-5 px-5">
            Loading...
          </Spinner>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
