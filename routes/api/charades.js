const express = require('express');
const router = express.Router();
const CharadesList = require('../../models/Charades');

// @Route GET api/charades
// @desc Test Route
// @access Public
router.get('/', async (req, res) => {
  const charades = await CharadesList.find(CharadesList);
  return res.json(charades);
});

router.post('/', (req, res) => {
  res.send('Got a POST request');
});

module.exports = router;
