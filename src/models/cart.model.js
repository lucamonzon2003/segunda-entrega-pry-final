import mongoose from 'mongoose';
import productsModel from './product.model'

const cartsCollection = 'cart';

const cartsSchema = new mongoose.Schema({
    mail: {
        type: String,
        require: true
    },
    fyh: {
        type: Number,
        require: true
    },
    mensaje: {
        type: [ObjectId],
        ref: productsModel
    }
},
    { timestamp: true });

export const cartsModel = mongoose.model(cartsCollection, cartsSchema);