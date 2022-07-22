import React from 'react'

const SubTotal = (props) => {
  return (
    <div className="subtotal">
        <p>
            Sous total ({props.nbreItems} items): <strong>FCFA {props.prixTotal}</strong>
        </p>
        <small className="subtotal__gift">
            <input type="checkbox" /> Cette commande contient un cadeau
        </small>
        <button>Proceder au paiement</button>
    </div>
  )
}

export default SubTotal