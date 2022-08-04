import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addtoBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      let newBastek = [...state.items];

      if (index >= 0) {
        newBastek.splice(index, 1);
      } else {
        console.warn(
            `Não pode remover o item (id: ${action.payload.id}) pois não esta no carrinho!`
        );
      }

      state.items = newBastek;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtoBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) =>
 state.basket.items.filter((item) => item.id === id);

 export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total += item.price, 0)

export default basketSlice.reducer