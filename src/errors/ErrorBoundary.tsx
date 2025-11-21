import { Component } from 'react';

class ErrorBoundary extends Component<
    { children: React.ReactNode },
    { hasError: boolean }
> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: unknown) {
        console.error('ErrorBoundary caught:', error);
        console.error(info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
