
import { render, screen, fireEvent, waitFor, } from '@testing-library/react';
import { store } from "../Store/store"
import { describe, it, expect, beforeEach } from "vitest";
import React from 'react';
import { Provider } from 'react-redux';
import Subscribers from '../components/Subscribers';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { allSubscriber } from '../features/subscriber/subscriberSlice';
describe('Subscriber Component', () => {

    //Integration  TEST : Happy path
        it('succeeds fetching data : Happy path', async () => {
    
            render(
                <Provider store={store}>
                <MemoryRouter> 
               <Subscribers />
               </MemoryRouter>
             </Provider>
            );
            expect(screen.queryByTestId('loading')).toBeInTheDocument();
    
            await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());
            expect(screen.queryByTestId('loading')).toBeNull();
        });


    //Integration  TEST : UnHappy path
        it('fails fetching data: unhappy path', async () => {
            render(
                <Provider store={store}>
                    <MemoryRouter>
                        <Subscribers />
                    </MemoryRouter>
                </Provider>
            );
        
        
            const mock = new MockAdapter(axios);
            mock.onGet('http://localhost:8080/subscriber').reply(500, { error: 'Some error' });
        
            await store.dispatch(allSubscriber());
     
            await waitFor(() => {
            
                expect(screen.queryByTestId('loading')).toBeNull();
                expect(screen.queryByTestId('error')).toBeInTheDocument();
            });
        });
    });

