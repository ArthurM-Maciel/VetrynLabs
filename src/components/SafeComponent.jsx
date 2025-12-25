// Wrapper para proteger componentes individuais de erros
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(`Erro no componente ${this.props.name}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-red-50 border border-red-200 rounded m-4">
          <p className="text-red-800 text-sm">
            ⚠️ Erro ao carregar {this.props.name || 'componente'}
          </p>
          <p className="text-red-600 text-xs mt-2">
            Verifique o console para mais detalhes.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function SafeComponent({ children, fallback, name = 'Component' }) {
  return (
    <ErrorBoundary fallback={fallback} name={name}>
      {children}
    </ErrorBoundary>
  );
}

