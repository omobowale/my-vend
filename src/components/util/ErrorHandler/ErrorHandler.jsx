import React, { Component } from 'react';
import ErrorPage from '../../../modules/web/pages/ErrorPage/ErrorPage';

class ErrorHandler extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch(error, info) {
        this.setState({ hasError: true });

        console.log(error, info);
    }

    render() {
        const { hasError } = this.state;
        return hasError ? <ErrorPage /> : this.props.children;
    }
}

export default ErrorHandler;
