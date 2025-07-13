import { Fragment } from "react";

export default function Genres({genres}){
    return <div className="bg-gray-400 py-1 px-3 mt-2 rounded">
        <h3 className="text-xl font-medium">Genres</h3>
        <div className="flex gap-3">
            {genres.map(gen => {
                return <p key={gen} className="bg-gray-300 my-1 py-1 px-2 rounded cursor-pointer hover:bg-gray-200">{gen}</p>
            })}
        </div>
    </div>
}