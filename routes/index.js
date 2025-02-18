const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('index', { title: 'Express Pug Boilerplate' });
});

//Dynamic route
router.get('/count/:id', (req, res) => {
  console.log(req.params.id)
  if (req.params.id > 5) {
    res.render('index', { title: 'More than 5', brands: []})
  }
res.render('index', { title: req.params.id, brands: [] })
})

router.get('/Brands', (req, res) => {
  const items = [
    {name: 'Adidas'},
    {name:'Nike'},
    {name:'Puma'},
    {name:'New Balance'},
  ]
  res.render('index', { title: 'Brands we sell: ', brands: items } )
})

module.exports = router;
