import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slicers/cartSlice';
import WishlistSlice from './slicers/WishSlice';

// Function to load state from sessionStorage
const loadState = () => {
  try {
    const serializedCartState = sessionStorage.getItem('cart');
    const serializedWishState = sessionStorage.getItem('wish');

    return {
      cart: serializedCartState ? JSON.parse(serializedCartState) : undefined,
      wish: serializedWishState ? JSON.parse(serializedWishState) : undefined,
    };
  } catch (error) {
    console.error('Could not load state', error);
    return undefined;
  }
};

// Function to save state to sessionStorage
const saveState = (state: string) => {
  try {
    sessionStorage.setItem('cart', JSON.stringify(state.cart));
    sessionStorage.setItem('wish', JSON.stringify(state.wish));
  } catch (error) {
    console.error('Could not save state', error);
  }
};

// Load preloaded state for `cart` and `wish` from sessionStorage
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: WishlistSlice,
  },
  preloadedState, // Inject preloaded state into the store
});

// Subscribe to save cart and wish state to sessionStorage on any state change
store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});

// Export types for Redux hooks and usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
