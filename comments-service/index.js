const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({path:'.env'});
const app = express();

const routes = require('./src/routes/routes')

app.use(express.json())
app.use(cors());
app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running at port = ${process.env.PORT}`)
});