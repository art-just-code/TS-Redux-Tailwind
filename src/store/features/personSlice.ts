import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Person {
    id: number;
    name: string;
}

interface PersonState {
    persons: Person[];
}

const initialState: PersonState = {
    persons: [],
};

export const PersonSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        addPerson: (state, action: PayloadAction<{ name: string }>) => {
            // <> - generic, массив без generics может содержать что угодно.
            state.persons.push({
                id: state.persons.length, // просто назначаем id по количеству юзеров в хранилище
                name: action.payload.name,
            });
        },
    },
});

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;
