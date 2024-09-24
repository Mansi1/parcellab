import { Component } from 'react';

export class ErrorBoundary extends Component<any, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch() {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="text-white text-center h-full content-center py-10">
          <h1 className="text-8xl mb-4">500 ...</h1>

          <div className="max-w-[550px] m-auto">
            <div className="text-xl mb-4">Internal server error</div>
            <div className="lg:flex items-center my-10">
              <div className="text-xl ">
                the server has encountered an error and is unable to complete
                your request
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
