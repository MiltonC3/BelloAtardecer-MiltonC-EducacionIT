const { Router } = require("express");
const router = Router();

const { client, clientCuenta } = require("../controllers/clientController");

router.get("/client", client);
router.get("/client/cuenta", clientCuenta);

module.exports = router;
