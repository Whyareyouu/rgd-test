import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {TTrain} from "../../../types/train-types";


export const fetchTrains = createAsyncThunk('/trains/fetch', async () => {
    const response = await axios.get<TTrain[]>('https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json');
    return response.data
})

interface initialState {
    trains: TTrain[],
    isLoading: boolean,
    error: string | null;
}

const trainSlice = createSlice({
    name: 'trainSlice',
    initialState: {
        trains: [],
        isLoading: false,
        error: null
    } as initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTrains.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTrains.fulfilled, (state, action: PayloadAction<TTrain[]>) => {
            state.trains = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchTrains.rejected, (state) => {
            state.isLoading = false;
            state.error = "Error";
        })
    }
})

export const trainReducer = trainSlice.reducer
export const trainActions = trainSlice.actions
