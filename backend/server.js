const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

const products = [
  { id: 1, category: 'Accessories', name: 'Fox',      price: 9.99  },
  { id: 2, category: 'Accessories', name: 'Rabbit',   price: 9.99  },
  { id: 3, category: 'Accessories', name: 'Lion',     price: 14.99 },
  { id: 4, category: 'Accessories', name: 'Giraffe',  price: 19.99 },
  { id: 5, category: 'Accessories', name: 'Monkey',   price: 19.99 },
  { id: 6, category: 'Accessories', name: 'Cheetah',  price: 14.99 },
  { id: 7, category: 'Accessories', name: 'Deer',     price: 14.99 },
  { id: 8, category: 'Accessories', name: 'Squirrel', price: 29.99 },
]

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id))
  if (!product) return res.status(404).json({ error: 'Product not found' })
  res.json(product)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
