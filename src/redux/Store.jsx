import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productSlice from './Reducer/products'



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducer = combineReducers({
 product:productSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default Store