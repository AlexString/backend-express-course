const express = require('express');
const routerApi = require('./routes')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello express server');
});

routerApi(app)

app.listen(port, () => {
  console.log(`Port running in ${port}`)
});
