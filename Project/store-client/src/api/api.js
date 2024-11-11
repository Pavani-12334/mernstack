
import axios from 'axios'


const API = 'https://671b711a2c842d92c37fee3f.mockapi.io/productapp/products'
//const API = 'http://localhost:3000/products/all'

const getProducts = () => axios.get(API)


export { getProducts }