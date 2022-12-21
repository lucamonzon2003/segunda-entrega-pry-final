import 'dotenv/config';
import DaoService from `../daos/carts/${process.env.DATACORE}.dao.js`
import { cartCreateDTO } from '../dto/cartDto.js';

import { DTO } from '';

class CartsService {
    constructor() {
        this.product = new ProductsService;
        this.dao = new DaoService;
    }
    async getAll() {
        const cart = await this.dao.getAll();
        return cart;
    }
    async getById(id) {
        try {
            const cart = await this.dao.getById(id);
            return cart;
        } catch (err) {
            if (err.message === "Item not found") {
                throw new Error(`Product not found with id: ${id}`)
            }
            throw err;
        }

    }
    async create(obj) {
        const cartDto = new cartCreateDTO(obj);
        const cart = await this.dao.create(cartDto);
        return cart;
    }
    async delete(id) {
        await this.dao.delete(id)
    }
    async addProductToCart(cartId, productId) {
        try {
            const cart = await this.dao.addProductToCart(cartId, productId);
            return cart;
        } catch (err) {
            throw err
        }
    }
    async removeProductToCart(cartId, productId) {
        try {
            const cart = await this.dao.removeProductToCart(cartId, productId);
        } catch (err) {
            throw err
        }
    }
}

export default new CartsService();