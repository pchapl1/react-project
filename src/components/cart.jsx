import './cart.css'
import { useContext, useState } from 'react'
import Store  from '../context/storeContext'
import Product from './product.jsx'
import ProdInCart from './prodInCart'


const Cart = ()=> {
    let {cart, addProdToCart} = useContext(Store)



    console.log(cart)
    return (
        <div className='cart-page'>
            <h1>Cart Page</h1>
            <p>Cart: {cart.length}</p>
            
            <div className="prods">
            { cart.map( 
               (prod) => (<ProdInCart key={prod._id} data={prod}/>)
             ) }
        </div>
        </div>
    )
}

export default Cart;