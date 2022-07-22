import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ban from "../assets/img/faces/clem-onojeghuo-4.jpg";
import { Card, CardFooter, Col, Row, Spinner } from "reactstrap";

function CategoriesListing() {
  const [categories, setCategories] = useState([]);
  const [categoriesInitiaux, setCategoriesInitiaux] = useState([]);

  //Recherche des categories
  useEffect(() => {
    axios
      .get("https://localhost:8000/categories")
      .then((response) => {
        const result = response.data["hydra:member"];
        setCategories(() => result);
      })
      .catch((error) => console.log(error));
  }, []);

  //On extrait ici les catégories initiaux (Ceux n'ayant pas de produits)
  useEffect(() => {
    if (categories.length > 0) {
      const resultat = categories.filter((c) => c.produits.length == 0);
      setCategoriesInitiaux(() => resultat);
    }
  }, [categories]); // Lorsque la taille des produits a changé on effectue l'extration

  /*
  return (
    <div>
      CategoriesListing
      {
        (categories.length > 0) && categories.map(categorie => 
          <article key={categorie.id}>
            <h2>{categorie.libelle}</h2>
            <p>{categorie.description}</p>
            <Link to={`/main/categories/${categorie.id}`}>Voir les produits </Link>
          </article>
        )
      }

    </div>
  ); */
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
      <Row className="mt-2">
        <Col xs="4">
          <i
            className="bi bi-chevron-left"
            onClick={() => {
              window.history.back();
            }}
          ></i>
        </Col>

        <Col xs="8" className=" text-right">
          <h5>Liste des catégories</h5>
        </Col>
      </Row>
      {(categories.length > 0) ? (
        <Row xs="1" className="my-3">
          {
            categories.map((categorie) => (
            <Col className="mb-3">
            <Card body>
              <img
                className="card-img-top"
                style={{
                  height: "225px",
                  width: "100%",
                  display: "block",
                  borderRadius: "20px",
                }}
                src={categorie.capture}
              />
              <CardFooter className="px-0">
                <strong>{categorie.libelle}</strong>
                <br />
                <p>{categorie.description}</p>
                <Link to={`/main/categories/${categorie.id}`}>Voir les produits</Link>
              </CardFooter>
            </Card>
            </Col>
            ))
          }
        </Row>
      ) : (
        <Spinner color="primary" type="grow" className="py-5 mt-5 px-5">
          Loading...
        </Spinner>
      )
      }
    </div>
  );
}

export default CategoriesListing;
