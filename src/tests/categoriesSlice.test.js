import { suite, test } from 'vitest';
import { expect } from 'chai';
import { store } from '../Store/store'; // Adjust the path accordingly
import { allCategories } from '../features/category/categorySlice';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

suite('Categories Slice', () => {
  const mockFulfilledData = [
    {
      books: [],
      catId: 35,
      title: 'ppppp',
      description: 'pppp',
    },
    {
      books: [],
      catId: 36,
      title: 'ffff',
      description: 'fff',
    },
  ];

  test('handles allCategories async thunk pending state', async () => {
     store.dispatch(allCategories());

    const state = store.getState().CategoriesSlice;

    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  test('handles allCategories async thunk fulfilled state', async () => {


    await store.dispatch(allCategories());

    const state = store.getState().CategoriesSlice;

    expect(state.loading).toBe(false);
    expect(state.categories).toEqual(mockFulfilledData);
    expect(state.error).toBe(null);
  });

  test('handles allCategories async thunk rejected state', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('http://localhost:8080/category').reply(500, { error: 'Some error' });
    await store.dispatch(allCategories());

    const state = store.getState().CategoriesSlice;

    expect(state.loading).toBe(false);
    expect(state.error).toBe('Server Error');
  });
});