
const { Router } = require('express');

const errorRouter = Router();

errorRouter.all('/', (req, res) => {
    res.end('`Error')
})

module.exports = errorRouter;
