import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TTrainCharacteristics} from "../../../types/train-types";
import {stat} from "fs";

type initialState = {
    characteristics: TTrainCharacteristics[];
    errors: {
        [key: string]: string | null
    };
}

export const characteristicsSlice = createSlice({
    name: 'characteristicsSlice',
    initialState: {
        characteristics: [],
        errors: {},
    } as initialState,
    reducers: {
        addTrainData: (state, action: PayloadAction<TTrainCharacteristics[]>) => {
            state.characteristics = action.payload;
            return state;
        },
        changeCharacteristic: (state, action: PayloadAction<{ index: number, name: string, newValue: number }>) => {
            const {index, name, newValue} = action.payload;
            state.characteristics[index][name as keyof TTrainCharacteristics] = newValue;
            return state;
        },
        characteristicsError: (state, action: PayloadAction<{name: string,error: string | null}>) => {
            const {name, error} = action.payload
            state.errors[name] = error
            return state;
        }
    }
})

export const characteristicsReducer = characteristicsSlice.reducer
export const {addTrainData, changeCharacteristic, characteristicsError} = characteristicsSlice.actions