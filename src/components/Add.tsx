import { addPerson } from "../store/features/personSlice";
import { useAppDispatch } from "../store/store";
import { useRef } from "react";

function Add() {
    const name = useRef<string>("");
    const dispatch = useAppDispatch(); // используем диспатч, который настроили в store

    return (
        <form className="border rounded-md p-2 shadow-md m-2">
            <label htmlFor="name">Person Name:</label>
            <input
                id="name"
                className="border rounded-md p-2 mx-2"
                onChange={(e) => (name.current = e.target.value)}
                autoComplete="off"
            />
            <button
                onClick={() => dispatch(addPerson({ name: name.current }))} // нельзя просто передать name.current, так как в сторе ожидается { name }
                className="bg-violet-500 text-white rounded md px-4 py-2 cursor-pointer hover:bg-violet-600"
            >
                Add
            </button>
        </form>
    );
}

export default Add;
