import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';

// Preferencia de tema (oscuro por defecto)
(() => {
  try {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved ? saved === 'dark' : prefersDark || true;
    document.documentElement.classList.toggle('dark', dark);
  } catch {}
})();

// ErrorBoundary para evitar pantalla en blanco
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    this.setState({ info });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen grid place-items-center p-6">
          <div className="max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-zinc-200">
            <h1 className="text-xl font-semibold mb-3">Ha ocurrido un error</h1>
            <pre className="text-xs whitespace-pre-wrap opacity-80">{String(this.state.error)}</pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
