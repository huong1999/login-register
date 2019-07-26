const express = require('express');
const router = express.Router();
const middleware = require("../middleware/verify_access_token");

const controllerUser = require("../controllers/userController");

router.post('/register', controllerUser.register);
router.post('/sign_in', controllerUser.sign_in);
router.put('/password', middleware.verifyAccessToken, controllerUser.changePassword);

module.exports = router;