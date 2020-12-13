const express = require('express');
const router = express.Router();
const db = require('../../config/db-connect');


router.get("/", (req, res, next) =>
    res.render('main')
)

module.exports = router;