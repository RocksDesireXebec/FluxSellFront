import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";

const PanierProduit = ({ id, libelle, marque, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{libelle}</p>
        <p className="checkoutProduct__title">{marque}</p>
        <p className="checkoutProduct__price">
          <small>FCFA</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Retirer du panier</button>
      </div>
    </div>
  );
};

export default PanierProduit;
