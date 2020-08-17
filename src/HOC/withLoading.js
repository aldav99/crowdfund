import React from 'react';

export function withLoading(EnhancedComponent) {
    return function withLoadingEnhancedComponent({ isLoading, ...props }) {
        if (!isLoading)
            return <EnhancedComponent {...props} />;
        return <div>Loading...</div>;
    };
}
