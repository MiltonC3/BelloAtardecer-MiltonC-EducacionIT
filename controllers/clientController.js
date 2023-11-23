const client = (req, res) => {
    res.render("client");
};
const clientCuenta = (req, res) => {
    res.render("clientCuenta");
};

module.exports = {
    client,
    clientCuenta,
};
