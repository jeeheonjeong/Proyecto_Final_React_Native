import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  loading: false,
  error: null,
  searchQuery: '',
  selectedCategory: 'all',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.error = null;
    },
    addProduct: (state, action) => {
      state.products.unshift(action.payload);
    },
    updateProductInState: (state, action) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...action.payload };
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {
  setProducts,
  addProduct,
  updateProductInState,
  removeProduct,
  setLoading,
  setError,
  clearError,
  setSearchQuery,
  setSelectedCategory,
} = productsSlice.actions;


export const selectFilteredProducts = (state) => {
  let filtered = state.products.products;


  if (state.products.searchQuery) {
    const query = state.products.searchQuery.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        (product.category && product.category.toLowerCase().includes(query))
    );
  }


  if (state.products.selectedCategory !== 'all') {
    filtered = filtered.filter(
      (product) => product.category === state.products.selectedCategory
    );
  }

  return filtered;
};

export const selectCategories = (state) => {
  const categories = new Set();
  state.products.products.forEach((product) => {
    if (product.category) {
      categories.add(product.category);
    }
  });
  return ['all', ...Array.from(categories)];
};

export default productsSlice.reducer;
