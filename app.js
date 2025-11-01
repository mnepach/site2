class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-cream)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[var(--text-dark)] mb-4">Что-то пошло не так</h1>
            <p className="text-[var(--text-light)] mb-4">Извините, произошла непредвиденная ошибка.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Обновить страницу
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [selectedCategory, setSelectedCategory] = React.useState('all');

    return (
      <div className="min-h-screen bg-[var(--bg-cream)]" data-name="app" data-file="app.js">
        <Header />
        <Hero />
        <ProductGrid selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);