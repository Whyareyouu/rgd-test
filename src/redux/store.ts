import {configureStore} from '@reduxjs/toolkit';
import {trainReducer} from "./features/trainSlice/trainSlice";
import {characteristicsReducer} from "./features/characteristicsSlice/characteristicsSlice";

export const store = configureStore({
    reducer: {
        train: trainReducer,
        characteristics: characteristicsReducer
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;