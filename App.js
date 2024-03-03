require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.NODE_PORT || 8001;

const housesRoutes = require('./routes/houses');

app.use('/houses', housesRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});