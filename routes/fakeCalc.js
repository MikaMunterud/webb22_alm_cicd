/* eslint-disable radix */
const express = require('express');

const router = express.Router();
const { Calculator } = require('../public/javascripts/calculator');

const calculator = new Calculator();
/* GET calculator. */
router.get('/', (req, res) => {
  res.render('calc', { result: calculator.getResult() });
});

router.post('/add', (req, res) => {
  const { value } = req.body;
  calculator.add(parseInt(value));
  res.redirect('/calc');
});

router.post('/subtract', (req, res) => {
  const { value } = req.body;
  calculator.subtract(parseInt(value));
  res.redirect('/calc');
});

router.post('/multiply', (req, res) => {
  const { value } = req.body;
  calculator.multiply(parseInt(value));
  res.redirect('/calc');
});

router.post('/divide', (req, res) => {
  const { value } = req.body;
  calculator.divide(parseInt(value));
  res.redirect('/calc');
});

router.post('/clear', (req, res) => {
  calculator.clear();
  res.redirect('/calc');
});

router.post('/clearAll', (req, res) => {
  calculator.clearAll();
  res.redirect('/calc');
});

router.post('/undo', (req, res) => {
  calculator.undo();
  res.redirect('/calc');
});

module.exports = router;
