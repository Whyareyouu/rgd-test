import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TTrainCharacteristics} from "../../../types/train-types";

export const characteristicsSlice = createSlice({
    name: 'characteristicsSlice',
    initialState: [] as TTrainCharacteristics[],
    reducers: {
        addTrainData: (state, action: PayloadAction<TTrainCharacteristics[]>) => {
            state = action.payload;
            return state;
        },
        changeCharacteristic: (state, action: PayloadAction<{ index: number, name: string, newValue: number }>) => {
            const {index, name, newValue} = action.payload;
            state[index][name as keyof TTrainCharacteristics] = newValue;
            return state;
        },
        clearCharacteristics: (state) => {
            state = [];
            return state;
        }
    }
})

export const characteristicsReducer = characteristicsSlice.reducer
export const {addTrainData, clearCharacteristics, changeCharacteristic} = characteristicsSlice.actions