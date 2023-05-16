const express = require('express');

const router = express.Router();
const users = [
  { username: 'MM', FirstName: 'Mika', Surname: 'Munterud' },
  { username: 'AW', FirstName: 'Alexander', Surname: 'Wiklöv' },
  { username: 'LH', FirstName: 'Linus', Surname: 'Härén' },
];

/* GET users listing. */
router.get('/', (req, res) => {
  res.send(users);
});

module.exports = router;
