require('dotenv').config();
const express = require('express');
const port = process.env.NODE_PORT || 443;
const cors = require('cors');

const app = express();
app.use(cors()); 
const housesRoutes = require('./routes/houses');

app.use('/houses', housesRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});