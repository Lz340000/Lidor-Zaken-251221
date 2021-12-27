import React from 'react';
import useErrorHandler from './useErrorHandler';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    let errorObj = {
      name: error.name,
      message: error.toString(),
      stack: errorInfo.componentStack
    };
    this.props.onError && this.props.onError(errorObj);
  }

  render() {
    return this.props.children;
  }
}

const Index = ({ children }) => {
  const { reactErrorHandler } = useErrorHandler();
  return <ErrorBoundary onError={reactErrorHandler}>{children}</ErrorBoundary>;
};

export default Index;
