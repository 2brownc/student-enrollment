import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    slot: null,
    name: null,
    age: null,
    currentInput: null
  },
  reducers: {
    setSlot: (state, action) => {
      state.slot = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    setAge: (state, action) => {
      state.age = action.payload
    },
    setCurrentInput: (state, action) => {
      state.currentInput = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setSlot,
  setName,
  setAge,
  setCurrentInput,
} = chatSlice.actions

export const currentInput = (state) => state.chat.currentInput
export const name = (state) => state.chat.name
export const age = (state) => state.chat.age
export const slot = (state) => state.chat.slot

export default chatSlice.reducer

