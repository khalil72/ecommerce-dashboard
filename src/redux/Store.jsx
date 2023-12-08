import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productSlice from './Reducer/products'
import api from './Reducer/api'



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const reducer = combineReducers({
 product:productSlice,
 api:api
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