// routes/index.js
import { Router } from 'express';
const router = Router();

// GET / (Homepage)
router.get('/', (req, res) => {
  res.send('This is the Homepage');
});

// GET /about (About Us page)
router.get('/about', (req, res) => {
  res.send('This is the About Us page');
});

export default router;