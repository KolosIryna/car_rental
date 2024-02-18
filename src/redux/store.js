import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { carReducer } from './sliceCar';

export const rootReducer = combineReducers({
  car: carReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
