import Users from '../models/userModel.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';

export const login = (req, res) => {
    res.render('login');
};
export const signup = (req, res) => {
    res.render('signup');
};

export const userRegister = async (req, res) => {
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        console.log('Tenemos un error de validacion');
        return res.json({ error: 'Tenemos un error' });
    }

    const { nombre, email, password } = req.body;

    console.log(nombre, email)

    try {
        let usuarioNuevo = await Users.findOne({ email });
        console.log(usuarioNuevo)
        if (usuarioNuevo) {
            return res.render('error', {
                mensajeErrorUser,
            });
        }

        usuarioNuevo = new Users(req.body);

        const salt = bcrypt.genSaltSync(10);
        usuarioNuevo.password = bcrypt.hashSync(password, salt);

        console.log(`Creaste un usuario: ${usuarioNuevo}`);

        await usuarioNuevo.save();

        return res.render('login');
    } catch (error) {
        return res.json({error: error.message});
    }
};
export const userLogin = async (req, res) => {
    const { email, password } = req.body;

    console.log(`Los datos son: ${email}, ${password}`);

    //Utilizamos la verificación de express-validator
    const errores = validationResult(req);

    //Si hay errores
    if (!errores.isEmpty()) {
        console.log('Tenemos un error de validación');
        return res.json({ error: 'tenemos un error de validación' });
    }

    try {
        const usuarioLogin = await Users.findOne({ email });

        console.log(`Usuario encontrado: ${usuarioLogin}`);

        if (!usuarioLogin) {
            return res.render('signup');
        }

        const validacionPass = bcrypt.compareSync(
            password,
            usuarioLogin.password
        );

        console.log(`Validación es: ${validacionPass}`);

        if (validacionPass) {
            return res.redirect('/user/client');
        }
    } catch {
        return res.json({ error: 'error en la db' });
    }
};
