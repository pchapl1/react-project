import './prodInCart.css'

const ProdInCart = (props) => {
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className="card mb-4 border-dark w-75">
                <div className="card-header">

                <h5 className="card-title m-3">{props.data.title}</h5>
                </div>
                <div className="card-body d-flex">
                    
                    <div className="row d-flex">
                        <img className='' src={"/img/" + props.data.image}alt="product img" />
                    </div>
                    <div className="row d-flex align-baseline">
                        <p className="card-text">quantity: {props.data.quantity}</p>
                        <p className="card-text">category: {props.data.category}</p>
                    </div>
                    <div className="row">
                        <span className='m-0'>price: {props.data.price}</span>
                        <span className='m-0'> total: {props.data.total}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProdInCart;