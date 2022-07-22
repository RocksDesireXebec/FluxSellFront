import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import { useNavigate, Link } from "react-router-dom";

const ProduitWidget = ({ id, libelle, marque, note, prix, description }) => {
  //Vérification de l'authenfication
  const [token, setToken] = useState({});
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  //Redirection de l'utilisateur dans le cas ou non authentifié
  let navigate = useNavigate();

  function handleClick() {
    navigate('/login');
  }

  const [{ basket }, dispatch] = useStateValue();
  
  const addToBasket = () => {
    if (token?.length > 0) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          libelle: libelle,
          marque: marque,
          prix: prix,
        },
      });
    } else {
        handleClick();
    }
  };
  return (
    <article key={id}>
      <h2>{libelle}</h2>
      <p>{marque}</p>
      <p>{note}</p>
      <p>{prix}</p>
      <p>{description}</p>
      <button onClick={addToBasket}>Ajouter au panier</button>
      <Link to={`/main/categorie/${id}/produits/${id}`}>Consulter</Link>
    </article>
  );
};

export default ProduitWidget;
