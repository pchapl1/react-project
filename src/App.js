import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Catalog from './components/catalog';
import Footer from './components/footer';
import NavBar from './components/navBar';
import About from './components/about';
import Home from './components/home';
import Admin from './components/admin';
import Cart from './components/cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>

          <Route path= '/' element={<Home/>}></Route>
          <Route path= '/home' element={<Home/>}></Route>
          <Route path= '/catalog' element={<Catalog />}></Route>
          <Route path= '/about' element={<About />}></Route>
          <Route path= '/admin' element={<Admin />}></Route>
          <Route path= '/cart' element={<Cart />}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
