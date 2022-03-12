import { useState } from 'react'
import './product.css'
import QtyPicker from './qtyPicker'


const Product = (props) => {
    let [total, setTotal] =useState(props.data.price)
    const onQtyChange = (qty) => {
        setTotal(total = Math.round((props.data.price * qty +Number.EPSILON)*100)/100)
    }


    return (
        <div className='product'>
            <img src={"/img/" + props.data.image}alt="product img" />

            <h2>{props.data.title}</h2>
            <label htmlFor="">price: ${props.data.price}</label>
            <label htmlFor="">total: ${total}</label>
            <QtyPicker onChange={onQtyChange}></QtyPicker>
            <button className='btn btn-primary btn-sm'>Add</button>
        </div>
    )
}

export default Product