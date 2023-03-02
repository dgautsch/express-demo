import { Router } from 'express';

const router = new Router();

router.get('/shipping-address', (req, res) => {
  res.send('This is the shipping address page');
});

router.get('/payment', (req, res) => {
  res.send('This is the payment page');
});

export default router;
