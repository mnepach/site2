function Footer() {
  try {
    return (
      <footer className="bg-[var(--primary-color)] text-white py-12 px-4" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-inter">Лесной Край</h3>
              <p className="text-white/80">
                Качественные товары для активного отдыха в Беларуси. 
                Доставка по всей стране.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center space-x-2">
                  <div className="icon-phone text-sm"></div>
                  <span>+375 (29) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="icon-mail text-sm"></div>
                  <span>info@lesnoy-kray.by</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="icon-map-pin text-sm"></div>
                  <span>Минск, Беларусь</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <div className="space-y-2 text-white/80">
                <div>Доставка и оплата</div>
                <div>Возврат и обмен</div>
                <div>Гарантия качества</div>
                <div>О компании</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2025 Лесной Край. Все права защищены.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}