"use client";
import { useAppSelector } from "../store/store";
import { Person } from "../store/features/personSlice";

const List = () => {
    const persons = useAppSelector((state) => state.person.persons);

    return (
        <div className="rounded-md shadow border m-2 p-2">
            <p>This is LIst Component</p>
            <table className="rounded-md">
                <thead>
                    <tr className="bg-gradient-to-b from-sky-400 to-sky-600 text-white">
                        <th className="p-2 rounded border">ID</th>
                        <th className="p-2 rounded border">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person: Person) => {
                        return (
                            <tr
                                className="even:bg-slate-50"
                                key={person.id}
                            >
                                <td className="p-2">{person.id}</td>
                                <td className="p-2">{person.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default List;
