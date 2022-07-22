import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router";

import Navbar from "./components/Navbars/NavbarMain";
import Footer from "./components/Footer/Footer";

import Landing from "./views/Landing";
import CategoriesListing from "./views/CategoriesListing";
import ProductsListing from "./views/ProductsListing";
import ProductDetails from "./views/ProductDetails";
import Cart from "./views/Cart";
import Purchase from "./views/Purchase";
import Orders from "./views/Orders";
import NavbarMain from "./components/Navbars/NavbarMain";
import CategoriesDeCategorie from "./views/CategoriesDeCategorie";
import PaymentCompletion from "./views/PaymentCompletion";
import { StateProvider } from "./StateProvider/StateProvider";
import reducer, { initialState } from "./Reducer/reducer";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container fluid className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        {/* Ici la barre des navigations de gauche sur petit écran <Sidebar />*/}
        <Row className="main-panel">
            <NavbarMain />
            <Routes>
              <Route path="/accueil" element={<Landing />} />
              <Route path="/categories" element={<CategoriesListing />} />
              <Route
                path="/categories/:id"
                element={<CategoriesDeCategorie />}
              />
              <Route path="/produits/:id" element={<ProductsListing />} />
              <Route
                path="/categorie/:idC/produits/:idP"
                element={<ProductDetails />}
              />
              <Route path="/panier" element={<Cart />} />
              <Route path="/achat/:idProduit" element={<Purchase />} />
              <Route path="/commandes" element={<Orders />} />
              <Route
                path="/paymentcompletion"
                element={<PaymentCompletion />}
              />
              <Route path="*" element={<Landing />} />
            </Routes>
            <Footer/>
        </Row>
      </StateProvider>
    </Container>
  );
}

export default App;
