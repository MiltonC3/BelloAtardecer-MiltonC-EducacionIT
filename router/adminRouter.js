import { Router } from 'express';
const router = Router();

// import { check } from 'express-validator';
import { admin } from '../controllers/adminController.js';

router.get('/admin', admin);

export default router;
