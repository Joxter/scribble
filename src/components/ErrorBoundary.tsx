import React, { Component, ReactNode } from "react";
import { css } from "@linaria/core";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

const errorContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f8f9fa;
`;

const errorBox = css`
  max-width: 600px;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const errorTitle = css`
  font-size: 24px;
  font-weight: bold;
  color: #dc3545;
  margin-bottom: 16px;
`;

const errorMessage = css`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const errorDetails = css`
  font-family: monospace;
  font-size: 14px;
  color: #495057;
  background: #f1f3f5;
  padding: 12px;
  border-radius: 4px;
  overflow-x: auto;
  margin-bottom: 20px;
`;

const reloadButton = css`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className={errorContainer}>
          <div className={errorBox}>
            <h1 className={errorTitle}>Something went wrong</h1>
            <p className={errorMessage}>
              The application encountered an unexpected error. Please try reloading the page.
            </p>
            {this.state.error && (
              <pre className={errorDetails}>
                {this.state.error.toString()}
              </pre>
            )}
            <button className={reloadButton} onClick={this.handleReload}>
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
