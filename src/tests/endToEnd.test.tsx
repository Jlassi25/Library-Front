
import { render, screen, fireEvent, waitFor, } from '@testing-library/react';
import { store } from "../Store/store"
import { describe, it, expect, beforeEach } from "vitest";
import React from 'react';
import { Provider } from 'react-redux';
import Subscribers from '../components/Subscribers';
import { MemoryRouter } from 'react-router-dom';

 //End to End Test :Simulate Search for Sybscriber(Aymen)
 it('Test search for a subscriber', async () => {
    render(
      <Provider store={store}>
      <MemoryRouter> 
     <Subscribers />
     </MemoryRouter>
   </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Subscribers')).toBeInTheDocument();
    });

    const searchInput = await screen.findByTestId('search')  ;
    await waitFor(() => {

      fireEvent.change(searchInput, { target: { value: 'aymen' } });
  });
    await waitFor(() => {
    
      const cards = screen.getAllByTestId('card');
  
      expect(cards).toHaveLength(1);
    });

    expect(screen.getByText('aymen jlassi')).toBeInTheDocument();
  });
