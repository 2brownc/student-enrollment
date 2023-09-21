import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    slot: null,
		time: null,
		name: null,
		age: null,
		currentInput: null
  },
  reducers: {
    setSlot: (state, action) => {
      state.slot = action.payload
    },
    setTime: (state, action) => {
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
	setTime,
	setName,
	setAge,
	setCurrentInput,
} = chatSlice.actions

export default chatSlice.reducer

