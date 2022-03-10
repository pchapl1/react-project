import { useState } from 'react';
import './qtyPicker.css'

const QtyPicker = () => {
    let [qty, setqty] = useState(1)

    const handleDecrease = () => {
        if (qty > 1)
            setqty(qty-1)
    }


    const handleIncrease = () => {
        setqty(qty+1)
    }   
    return (
        <div className='qtyPicker'>
            <button className='btn btn-secondary btn-sm my-2 py-0' onClick={handleDecrease}>-</button>
            <label>{ qty }</label>
            <button className='btn btn-secondary btn-sm my-2 py-0' onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QtyPicker