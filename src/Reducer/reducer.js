export const initialState = {
  basket: [],
};

//selector
export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => amount + item.prix, 0);
};

let db,
  request,
  version = 1;

//Ouverture de la base de stockage
request = indexedDB.open("FluxSell");

request.onupgradeneeded = (e) => {
  db = e.target.result;

  // Delete the current objectStore if it exists. This is useful for testing, 
  // but this will wipe existing data each time this event handler executes.
  if (db.objectStoreNames.contains("Panier")) {
    const req = db.deleteObjectStore("Panier");
    console.log(req);
  }
  
  const basket = db.createObjectStore("Panier",{keyPath: "index"});
  console.log("Mise à jour");
};

request.onsuccess = (e) => {
  //On ne peut creer de table sur cette evenement
  db = e.target.result;
};

request.onerror = (e) => {
  console.log(`error ! ${e.target.error} was found`);
};

function setPanier(panier) {
  
  db?.close();

  //On efface les données précédente pour eviter les erreurs de contraintes de clés
  //if (db.objectStoreNames.contains("Panier")) {
  //  db.deleteObjectStore("Panier");
  //}
  // Creation d'une transaction
  //const tx = db.transaction("Panier","readwrite");

  //get the objetstore
  //const p = tx.objectStore("Panier");
  //p.clear();
  /*
  panier.basket.forEach(element => {
    const choix = {
      index : panier.basket.indexOf(element),
      choix : element
    }
    p.add(choix);
  });*/
  
}

const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      const panierRendu = {
        ...state,
        basket: [...state.basket, action.item],
      };
      setPanier(panierRendu);
      return panierRendu;

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket !`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
