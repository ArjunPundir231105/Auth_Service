const express = require('express');

const viApiRouter = require('./v1');

const router = express.Router();

router.use('/v1', viApiRouter);    

module.exports = router;