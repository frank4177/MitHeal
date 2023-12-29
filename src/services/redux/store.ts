import { combineReducers, configureStore} from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import sessionStorage from 'redux-persist/es/storage/session';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: sessionStorage,
}

const rootReducer = combineReducers({user: userSlice});

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export let persistor = persistStore(store)