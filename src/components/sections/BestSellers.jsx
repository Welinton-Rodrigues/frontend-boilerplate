import ProductCard from '../ui/ProductCard'
import foxImg from '../../assets/fox.jpg'
import rabbitImg from '../../assets/rabbit.jpg'

// TODO: substituir duplicatas pelas imagens reais quando exportar do Figma
const products = [
  { id: 1, image: foxImg,    category: 'Accessories', name: 'Fox',     price: '$9.99'  },
  { id: 2, image: rabbitImg, category: 'Accessories', name: 'Rabbit',  price: '$9.99'  },
  { id: 3, image: foxImg,    category: 'Accessories', name: 'Lion',    price: '$14.99' },
  { id: 4, image: rabbitImg, category: 'Accessories', name: 'Giraffe', price: '$19.99' },
  { id: 5, image: foxImg,    category: 'Accessories', name: 'Monkey',  price: '$19.99' },
  { id: 6, image: rabbitImg, category: 'Accessories', name: 'Cheetah', price: '$14.99' },
  { id: 7, image: foxImg,    category: 'Accessories', name: 'Deer',    price: '$14.99' },
  { id: 8, image: rabbitImg, category: 'Accessories', name: 'Squirrel', price: '$29.99' },
]

function BestSellers() {
  return (
    <section className="bg-surface px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho da seção */}
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

        {/* Grid 4 colunas */}
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellers
