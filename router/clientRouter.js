import { Router } from 'express';
const router = Router();

// import { check } from 'express-validator';
import { 
    client,
    clientCuenta } from '../controllers/clientController.js';

router.get('/client', client)
router.get('/client/cuenta', clientCuenta)

export default router