import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/nav-bar/nav-bar';
import ContainerList from './components/item-list-container/ItemListContainer';

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
    
    </div>
    <div className="container-fluid">
        <ContainerList name="Red Sport" />
    </div>


    </>
  );
}

export default App;
