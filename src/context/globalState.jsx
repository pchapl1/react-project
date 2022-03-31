import { useState } from "react";
import store from "./storeContext";

const GlobalState = (props) => {
    const [cart, setCart] = useState([])
    const [loggedInUser, setLoggedInUser] = useState([])


    const addProdToCart = (prod)=> {
        console.log('adding product to state')
        let copy = [...cart]

        let found = false;

        for (let i = 0; i < copy.length; i++) {
            let prodInCart = copy[i];
            if (prodInCart._id === prod._id) {

                prodInCart.quantity += prod.quantity
                prodInCart.total += prod.total
                found = true;
            }
        }

        if (!found){
            copy.push(prod)
        }
        setCart(copy)
        
    }
    const removedProdFromCart = ()=> {
        console.log('removing product from state')
    }
    return (
        <store.Provider value = {{
            cart:cart,
            user: loggedInUser,
            addProdToCart: addProdToCart,
            removeProdFromCart: removedProdFromCart,
        }}>
            {props.children}
            </store.Provider>
    )
}

    export default GlobalState;