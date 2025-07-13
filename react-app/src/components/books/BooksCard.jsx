import { Fragment } from "react";
import Genres from "./Genres";
import Characters from "./Characters";

function BooksCard({data}){
    return <div className="border-2 bg-white/20 rounded w-[700px] m-auto my-5 py-3 px-5 relative">
        <p className="text-3xl font-semibold">{data.title}</p>
        <p>Author: <span className="font-medium">{data.author}</span></p>
        <p>Published: <span className="font-medium">{data.published}</span></p>
        <p className="absolute right-0 top-0 bg-green-600 py-1 px-6 text-xl font-semibold rounded-bl-lg text-white">Books</p>

        <Genres genres = {data.genres}/>
        <Characters characters={data.characters}/>
    </div>
}

export default BooksCard;