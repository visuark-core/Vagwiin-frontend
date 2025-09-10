import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error info here if needed
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center text-red-600 bg-red-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Something went wrong loading the 3D scene.</h2>
          <p>Please check your internet connection or the Spline scene URL.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
