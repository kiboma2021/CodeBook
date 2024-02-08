import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        total: 0,
        orderList: [],
        orderTotal: 0,
    },
    reducers: {
        add(state,action) {
            const updatedCart = state.cartList.concat(action.payload);
            const total = state.total + action.payload.price;
            return {...state,total, cartList: updatedCart}
        },
        remove(state,action) {
            const updatedCart = state.cartList.filter(item=> item.id !== action.payload.id)
            const total = state.total - action.payload.price;
            return {...state,total, cartList: updatedCart}
        },
        ordered(state,action) {
            console.log(action.payload);
            const updatedOrder = state.orderList.concat(action.payload);
        },
    }
})

export const { add, remove,ordered } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;