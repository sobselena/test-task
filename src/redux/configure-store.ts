import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './api/users-api';
import { setupListeners } from '@reduxjs/toolkit/query';
import userReducer from './reducers/user-slice';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
