import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error capturado pelo ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
          <div className="max-w-2xl w-full bg-red-50 border border-red-200 rounded-lg p-6">
            <h1 className="text-2xl font-bold text-red-800 mb-4">
              ⚠️ Erro ao carregar a aplicação
            </h1>
            <p className="text-red-700 mb-4">
              Ocorreu um erro ao renderizar a aplicação. Por favor, verifique o console do navegador para mais detalhes.
            </p>
            <details className="mt-4">
              <summary className="cursor-pointer text-red-600 font-semibold mb-2">
                Detalhes do erro
              </summary>
              <pre className="bg-red-100 p-4 rounded text-xs overflow-auto">
                {this.state.error ? this.state.error.toString() : 'Erro desconhecido'}
              </pre>
            </details>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

