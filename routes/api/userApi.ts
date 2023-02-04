const apiExpress = require('express');

const apiRouter = apiExpress.Router();

apiRouter.get('/test', (req,res) => {
    res.send('user api works !!!');
})
module.exports = apiRouter;