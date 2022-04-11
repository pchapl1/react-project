import './catalog.css'
import Product from './product.jsx'
import DataService from '../service/dataService';
import { useState, useEffect } from 'react';



const Catalog = () => {
    let [products, setProducts] = useState([])

    const loadCatalog = async () => {
        let services = new DataService();
        let data = await services.getCatalog();
        setProducts(data);

    }

    useEffect( () => {
        loadCatalog();
    }, [])

    return (
        <div className="catalog">
            { products.map( 
               (prod) => (<Product key={prod._id} data={prod}/>)
             ) }
        </div>
    );
}

export default Catalog;