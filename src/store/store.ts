import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from 'store/root-reducer'

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
