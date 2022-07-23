import React, { useState } from "react";
import ban from "../assets/img/faces/clem-onojeghuo-4.jpg";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  CardText,
  Button,
  Nav,
  NavItem,
  NavLink,
  CardFooter,
  Spinner,
} from "reactstrap";
import CategorieCard from "./CategorieCard";
import CategorieSlider from "./CategorieSlider";
import axios from "axios";
import { useEffect } from "react";
import ProductsFetching from "./ProductsFetching";

function Landing() {
  const [activeTab, setActiveTab] = useState("1");
  const [categories, setCategories] = useState([]);
  const [mostpopular, setMostPopular] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [categoriesFinaux, setCategoriesFinaux] = useState([]);

  //Recherche des categories
  useEffect(() => {
    axios
      .get("https://agile-dawn-36258.herokuapp.com/categories")
      .then((response) => {
        const result = response.data["hydra:member"];
        setCategories(() => result);
      })
      .catch((error) => console.log(error));
  }, []);

  //Recherche des produits les plus populaires
  useEffect(() => {
    axios
      .get("https://agile-dawn-36258.herokuapp.com/mostpopular")
      .then((response) => {
        const result = response.data["hydra:member"];
        setMostPopular(() => result);
      })
      .catch((error) => console.log(error));
  }, []);

  //Recherche des produits en promotions
  useEffect(() => {
    axios
      .get("https://agile-dawn-36258.herokuapp.com/promotions")
      .then((response) => {
        const result = response.data["hydra:member"];
        setPromotions(() => result);
      })
      .catch((error) => console.log(error));
  }, []);

  //On extrait ici les catégories finaux (Ceux ayant des produits)
  useEffect(() => {
    if (categories.length > 0) {
      const resultat = categories.filter((c) => c.produits.length !== 0);
      setCategoriesFinaux(() => resultat);
      //On définit le tab actif
      setActiveTab(`${resultat[0].id}`);

      //Faire la requête de produits pour chaque Catégories
    }
  }, [categories]);

  //Barre de navigation de la liste des produits finaux
  const categories_finaux = categoriesFinaux.map((c) => (
    <NavLink
      className="active"
      onClick={() => {
        setActiveTab(`${c.id}`);
      }}
      key={c.id}
    >
      <Card
        body
        className="shadow"
        style={{
          borderRadius: "15px",
        }}
      >
        <strong>{c.libelle}</strong>
      </Card>
    </NavLink>
  ));

  //On cree un afficheur de produits qui prend en props la liste des routes des produits d'une categories et l'indentifiant de la catégorie
  //On lui passe le tab actif pour qu'il fasse un appel d'API seulement s'il correspond a l'identifiant de son tab
  const affichage_des_produits = categoriesFinaux.map((c) => (
    <ProductsFetching
      key={c.id}
      routesList={c.produits}
      tabId={c.id}
      activeTab={activeTab}
    />
  ));

  return (
    <>
      {categories.length > 0 ? (
        <>
          <div className="nav-scroller py-0 mt-5 px-1 mb-3">
            <nav className="nav d-flex justify-content-between">
              {categories_finaux}
            </nav>
          </div>
          <Row xs="1">
            <TabContent activeTab={activeTab} className="mx-2">
              {affichage_des_produits}
            </TabContent>
          </Row>
          <div className="mx-2">
            <h2>Les plus populaires</h2>
          </div>

          {mostpopular.length > 0 ? (
            <div className="nav-scroller py-1 mt-2 mb-3 h-100">
              <nav className="produit nav d-flex justify-content-between">
                {mostpopular.map((produit) => (
                  <p key={produit.id}>
                    <Card body>
                      <img
                        className="card-img-top"
                        style={{
                          height: "225px",
                          width: "220px",
                          display: "block",
                          borderRadius: "20px",
                        }}
                        src={produit.capture}
                      />
                      <CardFooter className="px-0 ">
                        <strong>{produit.libelle}</strong>
                        <br />
                        FCFA {produit.prix}
                      </CardFooter>
                    </Card>
                  </p>
                ))}
              </nav>
            </div>
          ) : (
            <>
              <div className="py-1 mt-2 mb-3 h-100">
                <nav className="nav d-flex justify-content-between">
                  <Spinner
                    color="primary"
                    type="grow"
                    className="py-5 mt-5 px-5"
                  >
                    Loading...
                  </Spinner>
                </nav>
              </div>
            </>
          )}
          <div className="mx-2">
            <h2>En promotions</h2>
          </div>
          {promotions.length > 0 ? (
            <div className="nav-scroller py-1 mt-2 mb-3 h-100">
              <nav className="produit nav d-flex justify-content-between">
                {promotions.map((produit) => (
                  <p key={produit.id}>
                    <Card body>
                      <img
                        className="card-img-top"
                        style={{
                          height: "225px",
                          width: "220px",
                          display: "block",
                          borderRadius: "20px",
                        }}
                        src={produit.capture}
                      />
                      <CardFooter className="px-0 ">
                        <strong>{produit.libelle}</strong>
                        <br />
                        FCFA {produit.prix}
                      </CardFooter>
                    </Card>
                  </p>
                ))}
              </nav>
            </div>
          ) : (
            <>
              <div className="py-1 mt-2 mb-3 h-100">
                <nav className="nav d-flex justify-content-between">
                  <Spinner
                    color="primary"
                    type="grow"
                    className="py-5 mt-5 px-5"
                  >
                    Loading...
                  </Spinner>
                </nav>
              </div>
            </>
          )}
        </>
      ) : (
        <Spinner color="primary" type="grow" className="py-5 mt-5 px-5">
          Loading...
        </Spinner>
      )}
    </>
  );
}

export default Landing;
