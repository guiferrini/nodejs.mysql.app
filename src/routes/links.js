const express = require('express');
const router = express.Router();

//conectando a bd
const pool = require('../database');

router.get('/add', (req, res) => {
    res.render('links/add');
})

router.post('/add', (req, res) => {
    res.send('received');
});

module.exports = router;
