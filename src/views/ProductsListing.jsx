import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import ProduitWidget from "./ProduitWidget";
import { Card, CardFooter, Col, Row, Spinner } from "reactstrap";

import ban from "../assets/img/faces/clem-onojeghuo-4.jpg";

function ProductsListing() {
  let params = useParams();
  const id = params.id;
  const [produits, setProduits] = useState([]);
  const [fetchedProduits, setFetchedProduits] = useState([]);

  //Recherche de la categorie choisie, ensuite extraction des routes des produits de cette catégorie
  useEffect(() => {
    axios
      .get(`https://agile-dawn-36258.herokuapp.com/categories/${id}`)
      .then((response) => {
        const result = response.data.produits;
        console.log(result);
        setProduits(() => result);
      })
      .catch((error) => console.log(error));
  }, []);

  //Extraction des produits de la catégories
  useEffect(() => {
    if (produits.length > 0) {
      produits.map((route) => {
        axios
          .get(`https://agile-dawn-36258.herokuapp.com${route}`)
          .then((response) => {
            const result = response.data;
            setFetchedProduits((fetchedProduits) => [
              ...fetchedProduits,
              result,
            ]);
          })
          .catch((error) => console.log(error));
      });
    }
  }, [produits]);

  /*
  useEffect(() => {
    axios
      .get(`https://127.0.0.1:8000/categorie/${id}/produits`)
      .then((response) => {
        setProduits(response.data);
      })
      .catch((error) => console.log(error));
  }, []); */
  /*
  return (
    <div>Liste des produits de la catégorie : {id}
    {
      
      (produits.length > 0) && produits.map(produit => 
        <ProduitWidget
          id={produit.id}
          libelle={produit.libelle}
          marque={produit.marque}
          note={produit.note}
          prix={produit.prix}
          description={produit.description}
         />
      )
    }
    </div>
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
      {console.log(fetchedProduits)}
      {produits.length > 0 && (
        <Row className="my-2">
          <Col xs="2">
            <i className="bi bi-chevron-left"></i>
          </Col>
          <Col xs="10" className=" text-right">
            <h5>Liste des produits</h5>
          </Col>
        </Row>
      )}

      <Row className="my-2">
        <Col xs="9">
          <Card
            body
            className="shadow"
            style={{
              borderRadius: "15px",
            }}
          >
            <i className="bi bi-search"></i>
          </Card>
        </Col>
        <Col xs="3">
          <Card
            body
            className="shadow"
            style={{
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <i className="bi bi-funnel"></i>
          </Card>
        </Col>
      </Row>
      <Row xs="2" className="mb-5">
        {fetchedProduits.length > 0 ? (
          <>
            {fetchedProduits.map((produit) => (
              <Col
                style={{
                  padding: "5px",
                }}
              >
                <Card body>
                  <img
                    className="card-img-top"
                    style={{
                      height: "225px",
                      width: "100%",
                      display: "block",
                      borderRadius: "20px",
                    }}
                    src={produit.capture}
                  />
                  <CardFooter className="px-0">
                    <strong>{produit.libelle}</strong>
                    <br />
                    <p>FCFA {produit.prix}</p>
                    <button >Ajouter au panier</button>
                    <Link to={`/main/categorie/${id}/produits/${produit.id}`}>
                      Consulter
                    </Link>
                  </CardFooter>
                </Card>
              </Col>
            ))}
          </>
        ) : (
          <Col className="mb-3">
            <Spinner color="primary" type="grow" className="py-5 mt-5 px-5">
              Loading...
            </Spinner>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default ProductsListing;
