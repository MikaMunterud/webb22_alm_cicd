const express = require('express');

const router = express.Router();

const users = [
  { username: 'AW', firstName: 'Alexander', surname: 'Wiklöv' },
  { username: 'LH', firstName: 'Linus', surname: 'Härén' },
  { username: 'MM', firstName: 'Mika', surname: 'Munterud' },
];

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('users', { users });
});

module.exports = router;
