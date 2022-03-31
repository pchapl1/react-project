import { useContext, useState } from 'react'
import './product.css'
import QtyPicker from './qtyPicker'
import Store from '../context/storeContext'
import GlobalState from '../context/globalState'


const Product = (props) => {
    let [total, setTotal] =useState(props.data.price)
    let [quantity, setQuantity] =useState(1)
    const addContext = useContext(Store).addProdToCart;

    const onQtyChange = (qty) => {
        setQuantity(qty) 
        setTotal(total = Math.round((props.data.price * qty +Number.EPSILON)*100)/100)
    }

    const addProduct = () => {
        let cartProd = {...props.data}
        cartProd.total = total;
        cartProd.quantity = quantity;
        console.log(cartProd)
        addContext(cartProd)

    }



    return (
        <div className='product'>
            <img src={"/img/" + props.data.image}alt="product img" />

            <h2>{props.data.title}</h2>
            <label htmlFor="">price: ${props.data.price}</label>
            <label htmlFor="">total: ${total}</label>
            <QtyPicker onChange={onQtyChange}></QtyPicker>
            <button onClick={addProduct} className='btn btn-primary btn-sm'>Add</button>
        </div>
    )
}

export default Product