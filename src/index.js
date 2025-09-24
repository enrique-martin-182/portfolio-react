import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';

// ErrorBoundary para evitar pantalla en blanco y ver el error en pantalla
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
    // También lo verás en la consola del navegador
    console.error('ErrorBoundary atrapó un error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: 'ui-sans-serif, system-ui' }}>
          <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
            Ha ocurrido un error al renderizar la app.
          </h1>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#b91c1c' }}>
            {String(this.state.error)}
          </pre>
          {this.state.info && (
            <details open style={{ marginTop: 12 }}>
              <summary>Stack</summary>
              <pre style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.info.componentStack}
              </pre>
            </details>
          )}
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
