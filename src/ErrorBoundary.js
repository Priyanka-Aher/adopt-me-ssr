import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("ErrorBoundary caught an error", error, info);

    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }

  componentDidUpdate() {} // does not get executed on first render

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h2>
          An error occurred please retry using <Link to="/">this link</Link> OR
          wait for page to redirect.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
