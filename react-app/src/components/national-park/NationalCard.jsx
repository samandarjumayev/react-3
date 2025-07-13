import { Fragment } from "react";
import WildLife from "./WildLife";
import Landscapes from "./Landscapes";

export default function NationalCard({data}){
    return <div className="relative w-[700px]  bg-white/15 border-2 mx-auto mb-10 py-3 px-5 rounded overflow-hidden">
        <h2 className="absolute top-0 right-0 bg-orange-500 text-black py-1 px-6 text-xl rounded-bl-md cursor-pointer transition-all duration-150 hover:scale-115 hover:text-white">National Park</h2>
        <h3 className="text-2xl font-semibold">{data.name}</h3>
        <p>Country: <b>{data.country}</b></p>
        <p>Established: <b>{data.established}</b></p>

        <WildLife wild = {data.wildlife}/>
        <Landscapes land = {data.landscapes}/>
    </div>
}