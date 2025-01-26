import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, errorMessage: '' };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true, errorMessage: error.message };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <div className="error">An error occurred: {this.state.errorMessage}</div>;
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary
  