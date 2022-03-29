import { createContext } from "react";

const Store = createContext({
    cart: [],
    user: {},

    addProdToCart: ()=> {},
    removeProdFromCart: ()=> {},
});

export default Store;
