const express = require('express');
const router = express.Router();
const middleware = require("../middleware/verify_access_token");

const controllerTitle= require("../controllers/titlecontroller");

router.post('/search', controllerTitle.searchFull);
router.post('/create', controllerTitle.createTitle);

module.exports = router;