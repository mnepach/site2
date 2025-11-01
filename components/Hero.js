function Hero() {
  try {
    return (
      <section 
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4" 
        style={{
          backgroundImage: `linear-gradient(rgba(45, 74, 62, 0.7), rgba(45, 74, 62, 0.7)), 
                           url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
        }}
        data-name="hero" 
        data-file="components/Hero.js"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-inter leading-tight">
            Товары для настоящих<br />любителей природы
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Качественное снаряжение для рыбалки, походов и активного отдыха. 
            Проверено белорусскими условиями.
          </p>
          <button 
            className="btn-primary text-lg px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300"
            onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
          >
            Смотреть товары
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}