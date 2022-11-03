import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice';
import { newsApi } from './Api/NewsApi';
import { aboutApi } from './Api/AboutApi';
import { portfolioApi } from './Api/PortfolioApi';
import { typeApi } from './Api/TypeApi';
import { typeAboutApi } from './Api/TypeAboutApi';

const rootReducer = combineReducers({
  user: userReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [aboutApi.reducerPath]: aboutApi.reducer,
  [portfolioApi.reducerPath]: portfolioApi.reducer,
  [typeApi.reducerPath]: typeApi.reducer,
  // [typeAboutApi.reducerPath]: typeAboutApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      newsApi.middleware,
      aboutApi.middleware,
      portfolioApi.middleware,
      typeApi.middleware,
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
