const express = require('express');
const connectDB = require('./config/db.js');

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Charades API Running'));

app.use('/api/charades', require('./routes/api/charades'));

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
