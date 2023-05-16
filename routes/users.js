const express = require('express');

const router = express.Router();

const users = [
  { username: 'MM', firstName: 'Mika', surname: 'Munterud' },
  { username: 'AW', firstName: 'Alexander', surname: 'Wiklöv' },
  { username: 'LH', firstName: 'Linus', surname: 'Härén' },
];

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('users', { users });
});

module.exports = router;
