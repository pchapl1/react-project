import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Catalog from './components/catalog';
import Footer from './components/footer';
import NavBar from './components/navBar';
// import Product from './components/product';
// import QtyPicker from './components/qtyPicker';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;
