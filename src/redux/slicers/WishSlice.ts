import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WishItem {
  id: number;
  name: string;
  quantity: string;
  price: number;
  status: 'In Stock' | 'Out of Stock';
  image: string;
}

interface WishState {
  items: WishItem[];
}

const initialState: WishState = {
  items: JSON.parse(sessionStorage.getItem('wish') || '{"items": []}').items,
};

const wishSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishItem>) => {
      state.items.push(action.payload);
      sessionStorage.setItem('wish', JSON.stringify({ items: state.items }));
    },
    removeFromWish: (state, action: PayloadAction<number>) => {
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      state.items = updatedItems;
      sessionStorage.setItem('wish', JSON.stringify({ items: updatedItems }));
    },
  },
});

export const { addToWishlist, removeFromWish } = wishSlice.actions;
export default wishSlice.reducer;
