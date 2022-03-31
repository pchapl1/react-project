import { useContext } from 'react';
import Cart from './cart';
import './navBar.css';
import Store from '../context/storeContext'
import {Link} from 'react-router-dom'

const NavBar = () => {
    const cart = useContext(Store).cart
    const getNumber = () => {
      let total = 0
      for (let x = 0; x < cart.length; x ++){

        let prod = cart[x].quantity
        total += prod
      }
      return total
    }
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Shirts-R-Us</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/home' className="nav-link" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to= "/catalog">Catalog</Link>
        </li>
        <li className="nav-item">
          <Link to='/admin' className="nav-link" href="/admin">Admin</Link>
        </li>
        <li className="nav-item">
          <Link to = '/cart' className="nav-link"> View Cart: {getNumber()}</Link>
        </li> 
      </ul>
    </div>
  </div>
</nav>
    );
}

export default NavBar