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
        <div className="min-h-screen flex items-center justify-center">
          <button onClick={() => window.location.reload()} className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg">
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function AboutApp() {
  try {
    return (
      <div className="min-h-screen bg-white">
        <Navbar activePage="about-us" />
        <div className="py-20 px-8 bg-gradient-to-r from-purple-50 to-orange-50 fade-in">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About <span className="text-[var(--primary-color)]">Us</span></h1>
            <p className="text-xl text-gray-600">Meet the team behind MegaFlexiHR Solutions</p>
          </div>
        </div>
        <CompanyOverview />
        <LeadConsultant />
        <TeamSection />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('AboutApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><AboutApp /></ErrorBoundary>);