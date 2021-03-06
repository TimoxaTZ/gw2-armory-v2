import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from '../structure'

export const slice = createSlice({
  name: `ContentW`,
  initialState,
  reducers: {
    setJWT(state, action: PayloadAction<{ content: string }>) {
      state.content = action.payload.content
    },
  },
})

export const Actions = {
  ...slice.actions,
}

export const Reducer = slice.reducer
