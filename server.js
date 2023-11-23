import app from './src/app.js';
import './database/conexion.js';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}/signin`);
});
