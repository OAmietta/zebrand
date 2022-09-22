import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/index';

export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
})