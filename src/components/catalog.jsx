import './catalog.css'
import Product from './product.jsx'
import DataService from '../service/dataService';
import { useState, useEffect } from 'react';



const Catalog = () => {
    let [products, setProducts] = useState([])

    const loadCatalog = () => {
        let services = new DataService();
        let data = services.getCatalog();
        setProducts(data);
        // return products
    }

    useEffect( () => {
        loadCatalog();
    } )

    return (
        <div className="catalog">
            { products.map( 
               (prod) => (<Product key={prod._id} title={prod.title} price = {prod.price} image = {prod.image}/>)
             ) }
        </div>
    );
}

export default Catalog;