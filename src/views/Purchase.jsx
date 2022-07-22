import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import axios from "axios";

import CheckoutForm from "./CheckoutForm";
import "../assets/css/stripe.css";

function Purchase() {
  let params = useParams();
  const idProduit = params.idProduit;
  const [clientSecret, setClientSecret] = useState("");
  const [produit, setProduit] = useState({});

  //Vérification de l'authenfication
  const [token, setToken] = useState({});
  //useEffect(() => {
  //  setToken(localStorage.getItem("token"));
  //}, [token]);

  //Chargement de stripe
  const stripePromise = loadStripe(
    "pk_test_51KqGrVFn425of4BxNpwokK2aCJj1y7iOekf1oUtVgOZ1MX9puKcqD7HQFexU5IP0Yr4GU6CGCGhQDddaF9yqL1tZ00yP20oLvu"
  );

  //Recupération de l'intention de paiement et du produit
  /*
  useEffect(() => {
    (token?.length > 0) && ( 
      axios
        .get(`https://localhost:8000/intentStripe/${idProduit}`)
        .then((response) => {
          setClientSecret(response.data.client_secret); // Recuperation de l'intention de paiement
          setProduit(response.data.produit); // Recuperation du produit
        })
        .catch((error) => console.log(error)));
  }, []); */

  useEffect(() => {
    axios
      .get(`https://localhost:8000/intentStripe/${idProduit}`)
      .then((response) => {
        setClientSecret(response.data.client_secret); // Recuperation de l'intention de paiement
        setProduit(response.data.produit); // Recuperation du produit
      })
      .catch((error) => console.log(error));
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };
  /*
  return token?.length > 0 ? (
    <div>
      {clientSecret && produit && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} idProduit={produit.id} />
        </Elements>
      )}
    </div>
  ) : (
    <>
      <Link to="/login">Connectez vous pour acceder à votre panier</Link>
      <br />
      <Link to="/register">Ou sinon creer votre compte</Link>
    </>
  );*/

  return (
    <div>
      {clientSecret && produit && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} idProduit={produit.id} />
        </Elements>
      )}
    </div>
  );
}

export default Purchase;
