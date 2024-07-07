import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload; // action - не обязательный параметр, но в данном случае необходим
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, () => {
                console.log("incrementAsync.pending");
            })
            .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.value += action.payload;
            });
    },
});

export const incrementAsync: any = createAsyncThunk("counter/incrementAsync", async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
