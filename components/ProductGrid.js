function ProductGrid({ selectedCategory, setSelectedCategory }) {
  try {
    const categories = [
      { id: 'all', name: 'Все товары' },
      { id: 'knives', name: 'Ножи' },
      { id: 'fishing', name: 'Рыбалка' },
      { id: 'camping', name: 'Походы' },
      { id: 'clothing', name: 'Одежда' }
    ];

    const filteredProducts = selectedCategory === 'all' 
      ? PRODUCTS 
      : PRODUCTS.filter(product => product.category === selectedCategory);

    return (
      <section id="products" className="py-16 px-4" data-name="product-grid" data-file="components/ProductGrid.js">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--primary-color)] mb-8 font-inter">
            Наши товары
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[var(--primary-color)] text-white'
                    : 'bg-white text-[var(--primary-color)] border border-[var(--primary-color)]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="max-w-2xl mx-auto">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProductGrid component error:', error);
    return null;
  }
}