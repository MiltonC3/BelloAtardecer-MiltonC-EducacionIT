const app = require("./src/app");
require("./database/conexion");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}/signin`);
});
