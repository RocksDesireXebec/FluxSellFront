import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function Orders() {
  //Vérification de l'authenfication
  const [token, setToken] = useState({});
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  return token?.length > 0 ? (
    <div>
      Commandes
    </div>
  ) : (
    <>
      <Link to="/login">Connectez vous pour acceder à votre panier</Link>
      <br />
      <Link to="/register">Ou sinon creer votre compte</Link>
    </>
  );
}

export default Orders;
