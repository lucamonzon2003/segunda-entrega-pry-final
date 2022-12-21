import 'dotenv/config'
import DaoService from `../daos/products/${process.env.DATACORE}.dao.js`
import {ProductCreateDTO} from '../dto/product.dto.js';

class ProductsService {
    constructor(){
        this.dao = new DaoService;
    }
    async getAll(){
        const products = await this.dao.getAll()
        return products;
    }
    async getById(id){
        try {
            const product = await this.dao.getById(id)
            return product;
        } catch(err) {
            if (err.message === "Item not found") {
                throw new Error(`Product not found with id: ${id}`)
            }
            throw err;
        }
        
    }
    async create(obj){
        const productDto = new ProductCreateDTO(obj);
        const newProduct = await this.dao.create(productDto);
        return newProduct;
        
    }
    async delete(id){
        await this.dao.supr(id);
    }
    async update(obj, id){
        try {
            const product = await this.dao.update(obj, id)
            return product;
        } catch(err) {
            if (err.message === "Item not found") {
                throw new Error(`Product not found with id: ${id}`)
            }
            throw err;
        }
    }
}

export default ProductsService;