function ProductCard({ image, category, name, price }) {
  return (
    <div className="flex flex-col">
      {/* Imagem do produto */}
      <img
        src={image}
        alt={name}
        className="aspect-square w-full object-cover"
      />

      {/* Informações */}
      <div className="space-y-1 pt-3">
        <p className="text-xs text-muted">{category}</p>
        <p className="text-sm text-primary">{name}</p>
        <p className="text-sm text-secondary">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
