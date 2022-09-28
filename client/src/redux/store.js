import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { scrollApi } from './scrollApi'
import scrollReducer from './scrollSlice'

export const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    [scrollApi.reducerPath]: scrollApi.reducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(scrollApi.middleware)
})

setupListeners(store.dispatch)