// ErrorBoundary.tsx
import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import React, { Component, ReactNode } from "react";
import error from "@assets/LottieFiles/error.json";
import Lottie from "lottie-react";
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Header />
          <Lottie
            animationData={error}
            style={{ width: "300px", margin: "40px auto" }}
          />
          <h5 style={{ color: "red", textAlign: "center" }}>
            An unexpected error occurred and will be resolved soon.
          </h5>
          <Footer />
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
