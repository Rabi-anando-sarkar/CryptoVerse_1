import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from "../services/cryptoNewsApi";

const store = configureStore({
    reducer: {
      [cryptoApi.reducerPath]: cryptoApi.reducer,
      [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer, // Add the reducer for your cryptoApi
      // Add other reducers as needed
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        cryptoApi.middleware,
        cryptoNewsApi.middleware
        ),
  });
  
  export default store;