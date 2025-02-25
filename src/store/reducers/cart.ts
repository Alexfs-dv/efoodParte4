import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ApiRestaurants } from '../../pages/Home';

type cartState = {
  items: ApiRestaurants[];
  isOpen: boolean;
}

const initialState: cartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ApiRestaurants>) => {
      const item = state.items.find(item => item.id === action.payload.id);

      if(!item) {
        state.items.push(action.payload)
      } else {
        alert('O item já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<Number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions;
export default cartSlice.reducer;

