import "./App.css";
import { Switch } from "react-router-dom";
import { NavBar } from "./components/nav-bar/nav-bar";
import ContainerList from "./components/item-list-container/ItemListContainer";
import ItemDetailContainer from "./components/item-detail-container/itemDetailContainer";
import { BrowserRouter, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import { Cart } from "./components/cart/cart";
import { Home } from "./components/home/index";
import { CheckOut } from "./components/checkout/checkout";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/category/:categoryId">
              <ContainerList name="Red Sport" />
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
            <Route path="/checkout">
              <CheckOut />
            </Route>
            <Route path="*"></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
