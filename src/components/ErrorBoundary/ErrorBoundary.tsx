import React from 'react';
import SomethingWentWrong from "./SomethingWentWrong";

export default class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error)
        console.log(errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <SomethingWentWrong/>
        }
        return this.props.children;
    }
}
