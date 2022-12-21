import Express from "express";
const router = Express.Router;
import cartsService from "../services/carts.service.js";


router.get('/', async (_req, res, next) => {
try {
    const carts = await cartsService.getAll();
    res.status(200).json({ success: true, data: carts });
  } catch(err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const cart = await cartsService.create(data);
    res.status(201).json({
      success: true,
      data: cart.id,
    });
  } catch(err) {
    next(new BadRequest(err.message));
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const cart = await cartsService.getById(id);
    res.status(200).json({
      success: true,
      data: cart,
    });
  } catch(err) {
    next(err);
  }
});

router.post('/:id/products/:productId', async (req, res, next) => {
    try {
      const { id, productId } = req.params;
      const cart = await cartsService.addProductToCart(id, productId);
      res.status(200).json({
        success: true,
        data: cart,
      });
    } catch(err) {
      next(err);
    }
});

router.delete('/:id/products/:productId', async (req, res, next) => {
  try {
    const { id, productId } = req.params;
    await cartsService.removeProductToCart(id, productId);
    res.status(204).send();
  } catch(err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await cartsService.delete(id);
    res.status(204).send();
  } catch(err) {
    next(err);
  }
});

export default router;