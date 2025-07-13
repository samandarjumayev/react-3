import { Fragment } from "react";
import Routes from "./Routes";
import Fleet from "./Fleet";

export default function AirlinesCard({data}){
    return <div className="border-2 bg-white/20 rounded w-[700px] mx-auto mb-7 p-2 px-5 relative">
        <h3 className="absolute right-0 top-0 bg-cyan-400 py-1 px-5 text-xl font-semibold rounded-bl-md">Airlines</h3>
        <p className="text-3xl mb-1 font-semibold text-cyan-900">{data.name} ✈️</p>
        <p>Country: <span className="font-semibold">{data.country}</span></p>
        <p>Founded: <span className="font-semibold">{data.founded}</span></p>

        <Routes routes = {data.routes}/>
        <Fleet fleet = {data.fleet}/>
    </div>
}