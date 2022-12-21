import Express from "express";
const router = Express.Router;

import products from './products';
import carts from './carts';

router.use('/products', products);
router.use('/carts', carts);

export default router;