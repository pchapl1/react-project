import { useState } from 'react';
import './qtyPicker.css'

const QtyPicker = (props) => {
    let [qty, setQty] = useState(1)

    const handleDecrease = () => {
        if (qty > 1)
            setQty(qty-=1);
            props.onChange(qty);
    }


    const handleIncrease = () => {
        setQty(qty+=1)
        props.onChange(qty)

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