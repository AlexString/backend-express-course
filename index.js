const express = require('express');
const res = require('express/lib/response');
const faker = require('faker');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello express server');
});

// These are called endpoints
app.get('/new-route', (req, res) => {
  res.send('Hello, i\'m a new route');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;

  const limit = size || 10;

  for (let index = 0; index < limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('I am a filter');
});

//              parameter
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    {
      id,
      name: 'Product 2',
      price: 2000
    }
  );
});

//        query parameters
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No parameters sent.')
  }
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json(
    {
      categoryId,
      productId,
    }
  );
});

app.listen(port, () => {
  console.log(`Port running in ${port}`)
});
