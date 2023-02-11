const nodeExpress = require('express');

const router = nodeExpress.Router();

router.use("/user",require('./api/userApi.ts'))

module.exports = router;