import axios from 'axios'

// local data
var catalog = [
    {
        _id : 'fadsfa',
        title : 'Black Split Hem',
        price : 22.99,
        stock : 23,
        category : 'short sleeve',
        image : 'black-split-hem.jpeg'
    },
    {
        _id : 'adsfdfde',
        title : 'Cab Split Hem',
        price : 25.93,
        stock : 2,
        category : 'short sleeve',
        image : 'cabernet-split-hem.jpeg'
    },
    {
        _id : 'kjsdhfjkhr',
        title : 'White Crew Hem',
        price : 32.99,
        stock : 5,
        category : 'long sleeve',
        image : 'WHITE-CREW-SPLIT-HEM.jpeg'
    },
    {
        _id : '747EUJDJD',
        title : 'White Crew',
        price : 22.99,
        stock : 3,
        category : 'long sleeve',
        image : 'WHITE-LS-CREW-CURVE-HEM.jpeg'
    },
    {
        _id : 'O1834YRUGUIFDSG',
        title : 'Desert Split Hem',
        price : 52.99,
        stock : 230,
        category : 'short sleeve',
        image : 'desert.jpeg'
    },
]


class DataService{
    async getCatalog(){
        let resp = await axios.get("http://127.0.0.1:5000/api/catalog")
        return resp.data

        // local data
        // return catalog;
    }

    async getCoupons(){
        let resp = await axios.get("http://127.0.0.1:5000/api/save_coupon")
        return resp.data

        // local data
        // return catalog;
    }


    // async saveProduct(prod) {
    //     console.log('sending product to server...')
    //     let resp = await axios.post("http://127.0.0.1:5000/api/save_prod", prod)
    //     return resp.data
    // }


    async saveCoupon(coup) {
        console.log('saving Coupon...')
        let resp = await axios.post("http://127.0.0.1:5000/api/save_coupon", coup)
        return resp.data
    }
}

export default DataService;