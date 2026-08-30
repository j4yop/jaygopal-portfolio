import { Component, type ReactNode } from "react";

export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.warn("ErrorBoundary caught:", error.message);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}