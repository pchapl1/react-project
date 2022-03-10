import './product.css'
import QtyPicker from './qtyPicker'


const Product = (props) => {
    return (
        <div className='product'>
            <img src={"/img/" + props.image}alt="product img" />

            <h2>{props.title}</h2>
            <label htmlFor="">price: ${props.price}</label>
            <label htmlFor="">total: $</label>
            <QtyPicker></QtyPicker>
            <button className='btn btn-primary btn-sm'>Add</button>
        </div>
    )
}

export default Product