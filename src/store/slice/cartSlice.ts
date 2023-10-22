import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  // value: number
  items:Array<any>
  totalAmount:number
  totalQuantity:number
}

const initialState: CounterState = {
  items:[],
  totalAmount:0,
  totalQuantity:0
}

export const Cart = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    AddtoCart: (state,actions:PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1
      // console.log(action);
      state.totalQuantity+=actions.payload.quantity;
    },
    RemoveFromCart: (state,actions:PayloadAction<any>) => {
      // state.value -= 1
      // console.log(action);
      state.totalQuantity+=actions.payload.quantity;
    },
    ClearCart: (state) => {
      state.totalQuantity+=initialState.totalQuantity;

    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = Cart.actions
// { increment, decrement, incrementByAmount }
export default Cart.reducer