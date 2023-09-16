import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            state.carts = [action.payload, ...state.carts];
            
        },
        removeProductToCart: (state, action) => {
            const newCarts = state.carts.filter(
                (item) => item.id !== action.payload.id
            );

            state.carts = newCarts;
        },
        deleteProductToCart: (state, action) => {
            state.carts = [];
        }
    },
});

export const { addProductToCart, removeProductToCart, deleteProductToCart} = cartSlice.actions;

export default cartSlice.reducer;