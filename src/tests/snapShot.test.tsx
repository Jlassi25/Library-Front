import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from "../Store/store";

import React from "react";
import Home from "../components/Home";
import { MemoryRouter } from "react-router-dom";

//SnapShot  TEST
describe('Home Page', () => {
    it('renders snapshot', () => {
        const { container } = render(  
        <Provider store={store}>
                 <MemoryRouter>
                 <Home/>
                 </MemoryRouter>
           
        </Provider>);
        expect(container.firstChild).toMatchSnapshot();
    });
});