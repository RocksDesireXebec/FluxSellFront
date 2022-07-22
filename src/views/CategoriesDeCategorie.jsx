import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

import ban from "../assets/img/faces/clem-onojeghuo-4.jpg";
import { Card, CardFooter, Col, Row, Spinner } from "reactstrap";
import { computeHeadingLevel } from "@testing-library/react";

const CategoriesDeCategorie = () => {
  let params = useParams();
  const id = params.id;
  const [categorie, setCategorie] = useState({}); //Represente la catégorie choisie qui permettra de receuillir les sous catégories
  const [categories, setCategories] = useState([]); // Represente le tableau des sous catégories receuillis

  //Recherche de la categorie choisie
  useEffect(() => {
    axios
      .get(`https://localhost:8000/categories/${id}`)
      .then((response) => {
        const result = response.data;
        setCategorie(() => result);
      })
      .catch((error) => console.log(error));
  }, []);

  //Extraction des sous catégories
  useEffect(() => {
    if (Object.keys(categorie).length !== 0) {
      const sousCategories = categorie.categories;

      sousCategories.map((cat) => {
        axios
          .get(`https://localhost:8000${cat}`)
          .then((response) => {
            const result = response.data;
            setCategories((categories) => [...categories, result]);
          })
          .catch((error) => console.log(error));
      });
    }
  }, [categorie]);


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
      {Object.keys(categorie).length > 0 && (
        <Row className="mt-2">
          <Col xs="4">
            <i className="bi bi-chevron-left"></i>
          </Col>

          <Col xs="8" className=" text-right">
            <h5>Catégories de <strong>{categorie.libelle}</strong></h5>
          </Col>
        </Row>
      )}
      <Row xs="1" className="my-3">
        {categories.length > 0 ? (
          <>
            {categories.map((categorie) => (
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
                    <Link to={`/main/produits/${categorie.id}`}>
                      Voir les produits
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
};

export default CategoriesDeCategorie;
