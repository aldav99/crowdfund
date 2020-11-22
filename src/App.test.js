import React from 'react';

import { App } from './App';

import { render } from "@testing-library/react"

describe('Routing', () => {
    it('It renders Main page correctly', () => {
        const result = render(<App />)

        const headerEl = result.getByText('Crowdfunding')

        expect(headerEl).toBeTruthy()
    })
});