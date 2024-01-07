import { suite, test,it } from 'vitest';
import { expect } from 'chai';
import { store } from '../Store/store'; // Adjust the path accordingly
import { CategoriesSlice, allCategories, createCategory, deleteCategory } from '../features/category/categorySlice';
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

//***********************************UNIT TEST********************//
  it('Removes a category from all categories', () => {
    const initialState = {
      loading: false,
      categories: [
        {
            books: [],
            catId: 35,
            title: 'test1',
            description: 'test1',
          },
          {
            books: [],
            catId: 36,
            title: 'test2',
            description: 'test2',
          },
      ],
      error: null,
    };
    const categoryToRemoveId = 35;
    const action = deleteCategory.fulfilled(categoryToRemoveId);
    const newState = CategoriesSlice.reducer(initialState, action);
    const expectedState = {
      loading: false,
      categories: [
        {
            books: [],
            catId: 36,
            title: 'test2',
            description: 'test2',
          },
      ],
      error: null,
    };
    expect(newState).toEqual(expectedState);
  });

  it('َََAdds a category to the categories', () => {

    const initialState = {
      loading: false,
      categories: [
        {
            books: [],
            catId: 36,
            title: 'test2',
            description: 'test2',
          },
      ],
      error: null,
    };

    const newCategoryData = {
        books: [],
        catId: 40,
        title: 'test5',
        description: 'test5',
      };
    const action = createCategory.fulfilled(newCategoryData);
    const newState = CategoriesSlice.reducer(initialState, action);
    const expectedState = {
      loading: false,
      categories: [
        {
            books: [],
            catId: 36,
            title: 'test2',
            description: 'test2',
          },
          {
            books: [],
            catId: 40,
            title: 'test5',
            description: 'test5',
          }
      ],
      error: null,
    };

    expect(newState).toEqual(expectedState);
  });
});