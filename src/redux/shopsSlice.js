const { createSlice } = require('@reduxjs/toolkit');

const shopsInitialState = [];

const shopsSlice = createSlice({
  name: 'shops',
  initialState: shopsInitialState,
  reducers: {
    addCart: {
      reducer(state, action) {
        const newCartId = action.payload.id;
            const cartItem = state.find(item => item.id === newCartId);

            if (cartItem) {
                cartItem.quantity++;
            } else {
                state.push(action.payload);
            }
      },
    },
    deleteShop(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
    removeAllShops(state) {
        state.splice(0, state.length);
    },
    incrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export const {
  deleteShop,
  addCart,
  incrementQuantity,
  decrementQuantity,
  removeAllShops,
} = shopsSlice.actions;
export const shopsReducer = shopsSlice.reducer;
