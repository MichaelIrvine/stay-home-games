const mongoose = require('mongoose');

const CharadesSchema = new mongoose.Schema({
  words: [
    {
      type: String,
    },
  ],
});

module.exports = CharadesList = mongoose.model('Charades', CharadesSchema);
