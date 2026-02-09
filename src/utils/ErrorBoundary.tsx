import React, { Component, ReactNode } from 'react';
type ErrorState = {
   hasError: boolean;
};
type Props = {
   children: ReactNode;
};
export class ErrorBoundary extends Component<Props, ErrorState> {
   state: ErrorState = { hasError: false };
   static getDerivedStateFromError(): ErrorState {
      return { hasError: true };
   }
   componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
      console.error('Error :(');
   }
   render() {
      if (this.state.hasError) {
         return (
            <p className="error">
               An internal application <span className="error__word">Error </span> has occurred. Please contact support. We apologize for
               the inconvenience.
            </p>
         );
      }
      return this.props.children;
   }
}
