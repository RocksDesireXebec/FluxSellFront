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

function Landing() {
  const [activeTab, setActiveTab] = useState("1");
  const [categories, setCategories] = useState([]);
  const [categoriesFinaux, setCategoriesFinaux] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:8000/categories")
      .then((response) => {
        const result = response.data["hydra:member"];
        setCategories(()=> result);  
      })
      .catch((error) => console.log(error));
  },[]);

  //On extrait ici les catégories finaux (Ceux ayant des produits)
  //if (categories.length > 0) {
  //  const result = categories.filter((c) => c.produits.length !== 0);
  //  setCategoriesFinaux(result);
  //}
  

  return (
    <>
      {(categories.length > 0)
        ? 
        : <Spinner color="primary" type="grow" className="py-5 mt-5 px-5">
            Loading...
          </Spinner>
      }
      {
        (categoriesFinaux.length > 0)? 
        
        :
        <Spinner color="primary" type="grow" className="py-5 mt-5 px-5">
          Loading...
        </Spinner>
        ;
      }
      <div className="nav-scroller py-0 mt-5 px-1 mb-3">
        <nav className="nav d-flex justify-content-between">
          {categoriesFinaux.map((c) => {
              <NavLink
                className="active"
              >
                <Card
                  body
                  className="shadow"
                  style={{
                    borderRadius: "15px",
                  }}
                >
                  <strong>Bonjour</strong>
                </Card>
              </NavLink>;
            })}
          {/**
            <NavLink
          className="active"
          onClick={() => {
            setActiveTab("1");
          }}
        >
          <Card
            body
            className="shadow"
            style={{
              borderRadius: "15px",
            }}
          >
            <strong>Catégorie 1</strong>
          </Card>
        </NavLink>
        <NavLink
          onClick={() => {
            setActiveTab("2");
          }}
        >
          <Card
            body
            className="shadow"
            style={{
              borderRadius: "15px",
            }}
          >
            <strong>Catégorie 2</strong>
          </Card>
        </NavLink>
        <NavLink
          onClick={() => {
            setActiveTab("3");
          }}
        >
          <Card
            body
            className="shadow"
            style={{
              borderRadius: "15px",
            }}
          >
            <strong>Catégorie 3</strong>
          </Card>
        </NavLink>
        <NavLink
          onClick={() => {
            setActiveTab("4");
          }}
        >
          <Card
            body
            className="shadow"
            style={{
              borderRadius: "15px",
            }}
          >
            <strong>Catégorie 4</strong>
          </Card>
        </NavLink>
        <NavLink
          onClick={() => {
            setActiveTab("5");
          }}
        >
          <Card
            body
            className="shadow"
            style={{
              borderRadius: "15px",
            }}
          >
            <strong>Catégorie 5</strong>
          </Card>
        </NavLink>
           */}
        </nav>
      </div>
      <Row xs="1">
        <TabContent activeTab={activeTab} className="mx-2">
          <TabPane tabId="1">
            <div className="nav-scroller py-1 mt-5 mb-3 h-100">
              <nav className="produit nav d-flex justify-content-between">
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      Nom Produit
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
              </nav>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="nav-scroller py-1 mt-5 mb-3 h-100">
              <nav className="produit nav d-flex justify-content-between">
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
              </nav>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="nav-scroller py-1 mt-5 mb-3 h-100">
              <nav className="produit nav d-flex justify-content-between">
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
              </nav>
            </div>
          </TabPane>
          <TabPane tabId="4">
            <div className="nav-scroller py-1 mt-5 mb-3 h-100">
              <nav className="produit nav d-flex justify-content-between">
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
              </nav>
            </div>
          </TabPane>
          <TabPane tabId="5">
            <div className="nav-scroller py-1 mt-5 mb-3 h-100">
              <nav className="produit nav d-flex justify-content-between">
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
                <p>
                  <Card body>
                    <img
                      className="card-img-top"
                      style={{
                        height: "225px",
                        width: "220px",
                        display: "block",
                        borderRadius: "20px",
                      }}
                      src={ban}
                    />
                    <CardFooter className="px-0 ">
                      <strong>Nom Produit</strong>
                      <br />
                      FCFA 1200
                    </CardFooter>
                  </Card>
                </p>
              </nav>
            </div>
          </TabPane>
        </TabContent>
      </Row>
      <div className="mx-2">
        <h2>Les plus populaires</h2>
      </div>
      <div className="nav-scroller py-1 mt-2 mb-3 h-100">
        <nav className="produit nav d-flex justify-content-between">
          <p>
            <Card body>
              <img
                className="card-img-top"
                style={{
                  height: "225px",
                  width: "220px",
                  display: "block",
                  borderRadius: "20px",
                }}
                src={ban}
              />
              <CardFooter className="px-0 ">
                <strong>Nom Produit</strong>
                <br />
                FCFA 1200
              </CardFooter>
            </Card>
          </p>
          <p>
            <Card body>
              <img
                className="card-img-top"
                style={{
                  height: "225px",
                  width: "220px",
                  display: "block",
                  borderRadius: "20px",
                }}
                src={ban}
              />
              <CardFooter className="px-0 ">
                <strong>Nom Produit</strong>
                <br />
                FCFA 1200
              </CardFooter>
            </Card>
          </p>
          <p>
            <Card body>
              <img
                className="card-img-top"
                style={{
                  height: "225px",
                  width: "220px",
                  display: "block",
                  borderRadius: "20px",
                }}
                src={ban}
              />
              <CardFooter className="px-0 ">
                <strong>Nom Produit</strong>
                <br />
                FCFA 1200
              </CardFooter>
            </Card>
          </p>
          <p>
            <Card body>
              <img
                className="card-img-top"
                style={{
                  height: "225px",
                  width: "220px",
                  display: "block",
                  borderRadius: "20px",
                }}
                src={ban}
              />
              <CardFooter className="px-0 ">
                <strong>Nom Produit</strong>
                <br />
                FCFA 1200
              </CardFooter>
            </Card>
          </p>
        </nav>
      </div>
      <div className="mx-2">
        <h2>En promotions</h2>
      </div>
      <div className="nav-scroller py-1 mt-2 mb-5 h-100">
        <nav className="produit nav d-flex justify-content-between">
          <p>
            <Card body>
              <img
                className="card-img-top"
                style={{
                  height: "225px",
                  width: "220px",
                  display: "block",
                  borderRadius: "20px",
                }}
                src={ban}
              />
              <CardFooter className="px-0 ">
                <strong>Nom Produit</strong>
                <br />
                FCFA 1200
              </CardFooter>
            </Card>
          </p>
          <p>
            <Card body>
              <img
                className="card-img-top"
                style={{
                  height: "225px",
                  width: "220px",
                  display: "block",
                  borderRadius: "20px",
                }}
                src={ban}
              />
              <CardFooter className="px-0 ">
                <strong>Nom Produit</strong>
                <br />
                FCFA 1200
              </CardFooter>
            </Card>
          </p>
          <p>
            <Card body>
              <img
                className="card-img-top"
                style={{
                  height: "225px",
                  width: "220px",
                  display: "block",
                  borderRadius: "20px",
                }}
                src={ban}
              />
              <CardFooter className="px-0 ">
                <strong>Nom Produit</strong>
                <br />
                FCFA 1200
              </CardFooter>
            </Card>
          </p>
          <p>
            <Card body>
              <img
                className="card-img-top"
                style={{
                  height: "225px",
                  width: "220px",
                  display: "block",
                  borderRadius: "20px",
                }}
                src={ban}
              />
              <CardFooter className="px-0 ">
                <strong>Nom Produit</strong>
                <br />
                FCFA 1200
              </CardFooter>
            </Card>
          </p>
        </nav>
      </div>
    </>
  )
}

export default Landing;
