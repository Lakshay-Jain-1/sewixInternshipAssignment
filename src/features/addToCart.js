import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state,action) => {
      state.value.push(action.payload)
    },
    remove: (state) => {
      state.value -= 1
    }
  },
})

export const { add, remove  } = cartSlice.actions

export default cartSlice.reducer