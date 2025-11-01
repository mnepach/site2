function Header() {
  try {
    return (
      <header className="bg-white border-b border-[var(--border-color)] sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="icon-tree-pine text-xl text-white"></div>
              </div>
              <h1 className="text-2xl font-bold text-[var(--primary-color)] font-inter">Лесной Край</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="icon-shopping-cart text-xl text-[var(--primary-color)]"></div>
              <div className="icon-user text-xl text-[var(--primary-color)]"></div>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}