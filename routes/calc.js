const express = require('express');
// const { Calculator } = require('../calculator');

const router = express.Router();

/* GET calculator. */
router.get('/calc', (req, res) => {
  //   const { val } = req.query;
  //   const calc = new Calculator();

  res.render('index', { title: 'Express' });
});

module.exports = router;
