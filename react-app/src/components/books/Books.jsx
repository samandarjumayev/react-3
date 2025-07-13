import { Fragment } from "react";
import BooksCard from "./BooksCard";

export default function Books({books}){
    return <Fragment>
        {books.map(book => {
            return <BooksCard key={book.title} data={book}/>
        })}
    </Fragment>
}
