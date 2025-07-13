import { Fragment } from "react";
import { books } from "./components/infos";
import { airlines } from "./components/infos";
import { nationalParks } from "./components/infos";

import Books from "./components/books/Books";
import Airlines from "./components/airlines/Airlines";
import NationalPark from "./components/national-park/National";

export default function App(){
  return <Fragment>
    <Books books = {books}/>
    <br /> <hr /> <br /> <br />

    <Airlines airline = {airlines}/>
    <br /> <hr /> <br /> <br />

    <NationalPark national = {nationalParks}/>
  </Fragment>
}