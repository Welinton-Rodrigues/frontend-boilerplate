import { useState, useEffect } from 'react'
import ProductCard from '../ui/ProductCard'
import { getProducts } from '../../services/api'
import foxImg from '../../assets/fox.jpg'
import rabbitImg from '../../assets/rabbit.jpg'

const placeholderImages = {
  Fox:      foxImg,
  Rabbit:   rabbitImg,
  Lion:     foxImg,
  Giraffe:  rabbitImg,
  Monkey:   foxImg,
  Cheetah:  rabbitImg,
  Deer:     foxImg,
  Squirrel: rabbitImg,
}

function BestSellers() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="bg-surface px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-normal text-primary">Best sellers</h2>
          <a
            href="#"
            className="flex items-center gap-1 text-sm text-secondary transition-colors hover:text-primary"
          >
            Shop best sellers
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>

        {loading && (
          <p className="text-sm text-muted">Carregando produtos...</p>
        )}

        {error && (
          <p className="text-sm text-red-500">Erro ao carregar produtos.</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={placeholderImages[product.name]}
                category={product.category}
                name={product.name}
                price={`$${product.price.toFixed(2)}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default BestSellers
