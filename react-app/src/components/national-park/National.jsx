import { Fragment } from "react";
import NationalCard from "./NationalCard";

export default function NationalPark({national}){
    return <Fragment>
        {national.map((nation, index) => {
            return <NationalCard key={index} data = {nation}/>
        })}
    </Fragment>
}