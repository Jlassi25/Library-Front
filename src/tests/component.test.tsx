import { render, screen, fireEvent, waitFor, } from '@testing-library/react';
import { store } from "../Store/store"
import { describe, it, expect, beforeEach } from "vitest";
import React from 'react';
import { Provider } from 'react-redux';
import Subscribers from '../components/Subscribers';
import { MemoryRouter } from 'react-router-dom';


describe('Test Subscriber component', () => {
    //UNIT TEST : Component
    it('Test show all subscribers and delete Aymen Jlassi', async () => {
      render(
        <Provider store={store}>
           <MemoryRouter> 
          <Subscribers />
          </MemoryRouter>
        </Provider>
      );
  
      await waitFor(() => {
  
        expect(screen.getByText('Subscribers')).toBeInTheDocument();
  
        const cards = screen.getAllByTestId('card');
  
        expect(cards).toHaveLength(3);
  
  
      });
  
      //SIMULATE DELET PLAYER

      expect(screen.getByText('sofien tajin')).toBeInTheDocument();
      await waitFor(() => {
        const deleteButton = screen.getAllByRole('button', { name: /Delete/ })[1];
        fireEvent.click(deleteButton);
      });
  
  
      await waitFor(() => {
        const deletedPlayer = 'sofien tajin';
        expect(screen.queryByText(deletedPlayer)).not.toBeInTheDocument();
      });
    });
});
  