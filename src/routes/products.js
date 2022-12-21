import Express from "express";
const router = Express.Router;
import ProductsService from "../services/products.service";

router.get('/', async (_req, res, next) => {
    try {
        const products = await ProductsService.getAll();
        res.status(200).json({ succes: true, data: products });
    } catch(err) {
        next(err)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { data } = req.body;
        const product = await ProductsService.create(data);
        res.status(201).json({ succes: true, data: product });
    } catch(err) {
        next(err)
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await ProductsService.getById(id);
        res.status(200).json({ succes: true, data: product });
    } catch(err) {
        next(err)
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { update } = req.body
        const product = await ProductsService.update(id, update);
        res.status(200).json({ succes: true, data: product });
    } catch(err) {
        next(err)
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        await ProductsService.delete(id);
        res.status(204).send();
    } catch(err) {
        next(err)
    }
});

export default router;