import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { increment, decrement, incrementByAmount, incrementAsync } from "../store/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="flex flex-col gap-1 text-center">
            <h2>{count}</h2>
            <div className="flex gap-2">
                <button
                    className="border p-2 hover:rounded-lg"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    className="border p-2 hover:rounded-lg"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    className="border p-2 hover:rounded-lg"
                    onClick={() => dispatch(incrementByAmount(10))}
                >
                    Increment by 10
                </button>
                <button
                    className="border p-2 hover:rounded-lg"
                    onClick={() => dispatch(incrementAsync(10))}
                >
                    Increment async by 10
                </button>
            </div>
        </div>
    );
};

export default Counter;
