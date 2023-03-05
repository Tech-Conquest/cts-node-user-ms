const nodeExpress = require('express');

const router = nodeExpress.Router();

router.use("/user",require('./user/userService.ts'))


module.exports = router;