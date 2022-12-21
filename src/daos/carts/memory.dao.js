import Cmemory from '../../containers/C-memory.js';
import ProductsService from '../../services/products.service';


class productsMemory extends Cmemory {
    constructor(){
        super();
        this.products = new ProductsService;
    }
    async create(){
        const cart = {
            products: [],
            timestamp: Date.now() / 1000
        };
        const newCart = await super.create(cart);
        return newCart;
    }
    async addToCart(cartId, productId){
        const cartIndex = this.array.findIndex((cart) => cart.id === cartId);
        if (cartIndex > 0) throw new Error("Item not found");
        const product = this.products.getById(productId);
        this.array[cartIndex].products.push(product);
        return super.getById(cartId);
    }
    async removeToCart(cartId, productId){
        const cartIndex = this.array.findIndex((cart) => cart.id === cartId);
        if (cartIndex > 0) throw new Error("Item not found");
        this.array[cartIndex].products = this.array[cartIndex].products.filter(product => product.id !== productId);
    }

};

export default productsMemory;