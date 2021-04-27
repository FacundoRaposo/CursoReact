
import './App.css';
import {NavBar} from './components/nav-bar/nav-bar';
import ContainerList from './components/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/item-detail-container/itemDetailContainer'
import { BrowserRouter, Route } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext';
import { Cart } from './components/cart/cart';
import {Home} from './components/home/index';
function App() {
  return (

    <CartProvider>
    <BrowserRouter>
        <div className="App">
      <NavBar />
      <switch>
        <Route path ="/home">

          <Home />
        </Route>

      
    <Route path="/category/:categoryId">
        <ContainerList name="Red Sport" />
    </Route>
    <Route path="/item/:itemId">
    <ItemDetailContainer />
    </Route>
    <Route path="/Cart">
      <Cart/>    
    </Route>
    <Route path='*'>
          
    </Route>
    </switch>
    </div>
    </BrowserRouter>
    </CartProvider>


  );
}

export default App;
