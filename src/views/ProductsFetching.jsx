import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { Card, CardFooter, Spinner, TabPane } from "reactstrap";

const ProductsFetching = (props) => {
  const [produits, setProduits] = useState([]);

  // get memoized value
  const obj = useMemo(() => {
    return props.routesList.slice(0, 7);
  }, [props.routesList]);

  //On fait une requête des produits et on les remplis dans un tableau d'objets

  useEffect(() => {
    //Faire l'appel d'API seulement si le tab choisie correspond à l'identifiant du tab
    if (props.activeTab == props.tabId) {
      obj.map((route) => {
        axios
          .get(`https://localhost:8000${route}`)
          .then((response) => {
            console.log(produits);
            console.log(produits.length);
            if (produits.length < 7) {
              setProduits(
                /*Cette fonction permet de resoudre le probleme des produits qui ne s'empile pas*/ (
                  produits
                ) => [...produits, response.data]
              );
            }
          })
          .catch((error) => console.log(error));
      });
    }
  }, [props.activeTab]);// On précise la props activeTab, afin de detecter le changement de de tabulation

  //On prend le tableau des produits pour les afficher
  return (
    <>
      {/*console.log(produits)*/}
      {produits.length > 0 ? (
        <TabPane tabId={`${props.tabId}`}>
          <div className="nav-scroller py-1 mt-5 mb-3 h-100">
            <nav className="produit nav d-flex justify-content-between">
              {produits.map((produit) => (
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
        </TabPane>
      ) : (
        <TabPane tabId={`${props.tabId}`}>
          <div className="nav-scroller py-1 mt-5 mb-3 h-100">
            <nav className="produit nav d-flex justify-content-between">
              <Spinner color="primary" type="grow" className="py-5 mt-5 px-5">
                Loading...
              </Spinner>
            </nav>
          </div>
        </TabPane>
      )}
    </>
  );
};

export default ProductsFetching;
