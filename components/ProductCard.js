function ProductCard({ product }) {
  try {
    return (
      <div className="product-card bg-white rounded-lg overflow-hidden shadow-sm mb-6" data-name="product-card" data-file="components/ProductCard.js">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 sm:h-80 object-cover"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-[var(--accent-color)] text-white px-3 py-1 text-sm font-medium rounded">
              Новинка
            </span>
          )}
          {product.discount && (
            <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-sm font-medium rounded">
              -{product.discount}%
            </span>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-[var(--text-dark)] mb-3">{product.name}</h3>
          <p className="text-[var(--text-light)] text-base mb-6 leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              {product.oldPrice && (
                <span className="text-[var(--text-light)] text-sm line-through mb-1">
                  {product.oldPrice} BYN
                </span>
              )}
              <span className="text-2xl font-bold text-[var(--accent-color)]">
                {product.price} BYN
              </span>
            </div>
          </div>
          
          <button className="w-full bg-[var(--primary-color)] text-white py-4 rounded-lg text-lg font-medium hover:bg-[var(--secondary-color)] transition-colors">
            Заказать сейчас
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProductCard component error:', error);
    return null;
  }
}
