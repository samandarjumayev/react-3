import { Fragment } from "react";
import AirlinesCard from "./AirlinesCard";

export default function Airlines({airline}){
    return <Fragment>
        {airline.map(air => {
            return <AirlinesCard key={air.name} data = {air}/>
        })}
    </Fragment>
}