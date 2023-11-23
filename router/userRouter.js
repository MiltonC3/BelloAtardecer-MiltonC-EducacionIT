import { Router } from 'express';
const router = Router();

import { check } from 'express-validator';
import { login, signup, userRegister, userLogin } from '../controllers/userController.js';

router.get('/signin', login);
router.get('/signup', signup);

router.post(
    '/register',
    [
        check('nombre').isLength({ min: 4 }),
        check('email').isEmail(),
        check('password').isLength({ min: 6, max: 10 }),
    ],
    userRegister
);

router.post(
    '/signin'
    ,
    [
        check('email').isEmail(),
        check('password').isLength({min:8})
    ]
    , userLogin
);

export default router;