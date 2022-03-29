import './admin.css'
import Product from './product.jsx'
import DataService from '../service/dataService';
import { useState, useEffect } from 'react';

const Admin = ()=> {

    let [prod, setProd] = useState({})
    let [coup, setCoupon] = useState({})
    let [allCoups, setAllCoups] = useState([])
    let [allProds, setAllProds] = useState([])

    const handleInputChange = (e) => {
        let copy = prod;
        copy[e.target.name] = e.target.value;
        setProd(copy)
    }


    const saveProduct1 = ()=> {
        let service = new DataService();
        service.saveProduct(prod)

        let copy = [...allProds]
        copy.push(prod)
        setAllProds(copy)
    }

// coupon ===========================================================

    const handleCouponChange = (e) => {
        let copy = {...coup};
        copy[e.target.name] = e.target.value;
        setCoupon(copy)
    }

    const saveCoupon = () => {
        
        let service = new DataService();
        service.saveCoupon(coup)

        let copy = [...allCoups]
        setAllCoups(copy);
        console.log(copy)
    }

    return (
        <div className='admin-page'>
            <div className="my-3">
            <h1>Store Admin</h1>
            <h5>Shirts-R-Us</h5>
            </div>
            <div className="d-flex justify-content-between mx-3">
            <section className='my-3'>
                <h3 className='mb-3'>Register new Product</h3>
                <div className="form-group">
                    <label className='col-form-label' htmlFor="">Title: </label>
                    <input className='form-input' onChange= {handleInputChange} name='title'  type="text" />
                </div>
                <div className="form-group">
                    <label className='col-form-label' htmlFor="">Price: </label>
                    <input onChange= {handleInputChange} name='price' type="text" />
                </div>
                <div className="form-group">
                    <label className='col-form-label' htmlFor="">Stock: </label>
                    <input onChange= {handleInputChange} name='stock' type="text" />
                </div>
                <div className="form-group">
                    <label className='col-form-label' htmlFor="">Category: </label>
                    <input onChange= {handleInputChange} name='category' type="text" />
                </div>
                <div className="form-group">
                    <label className='col-form-label' htmlFor="">Image: </label>
                    <input onChange= {handleInputChange} name='image' type="text" />
                </div>
                <button onClick={saveProduct1} className="btn btn-outline-dark">Save Product</button>
            </section>
            <section className='my-3'>
                <h3 className='mb-3'>Coupon Codes</h3>
                <div className="form-row">
                <div className="form-group">
                    <label htmlFor="">Code: </label>
                    <input onChange={handleCouponChange} name='code' type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="">% discount: </label>
                    <input name = 'discount-percent' type="text" />
                </div>
                <button onClick={saveCoupon} className="btn btn-outline-dark">Save Coupon</button>
                </div>

            </section>
            <div className="coupon-list">
                {allCoups.map(coup =>(
                    <div key= {coup.code}>
                        <label htmlFor="">{coup.code}</label>
                    </div>

                ))}
            </div>
            </div>
        </div>

    )
}

export default Admin;