const express = require('express');

const router = express.Router();
// http://localhost:3000/api/v1/user?limit=23&offset=3
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No parameters sent.');
  }
});

module.exports = router;
