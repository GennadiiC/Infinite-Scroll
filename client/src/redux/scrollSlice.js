import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    limit: 17
  },
  reducers: {
    // method for setting 'limit' to get infinite scroll work
    setLimit: (state, action) => {
      state.limit = state.limit += action.payload
    }
  }
})

export const { setLimit } = scrollSlice.actions

export default scrollSlice.reducer