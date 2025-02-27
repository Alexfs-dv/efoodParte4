import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ApiRestaurants } from '../../pages/Home';
import { v4 as uuidv4 } from 'uuid';

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
      const itemWithuniqueId = { ...action.payload, uniqueId: uuidv4()}
      state.items.push(itemWithuniqueId)
    },
    remove: (state, action: PayloadAction<String>) => {
      state.items = state.items.filter((item) => item.uniqueId !== action.payload.toString())
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

