import { configureStore } from "@reduxjs/toolkit";
import { PersonSlice } from "./features/personSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store: any = configureStore({
    reducer: {
        person: PersonSlice.reducer,
    },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;