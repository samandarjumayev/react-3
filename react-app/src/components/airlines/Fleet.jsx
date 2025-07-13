import { Fragment } from "react";

export default function Fleet({fleet}){
    return <div className="bg-gray-300 my-2 py-2 px-4 rounded">
        <h3 className="text-xl font-semibold">Fleet</h3>

        {fleet.map((flt, index) => {
            return <div key={index} className="bg-gray-400 my-1 py-1 px-3 rounded h-30 flex gap-3">
                <div className="flex-1 flex flex-col justify-center">
                    <p>Model: <b>{flt.model}</b></p>
                    <p>Capacity: <b>{flt.capacity}</b></p>
                </div>
                <div className="flex-2 flex gap-2 justify-between items-center">
                    {flt.images.map(rasm => {
                        return <img key={rasm} src={rasm} alt="" className="w-[33%] h-[70%] object-cover object-center rounded cursor-pointer hover:scale-130 transition-all duration-150"/>
                    })}
                </div>
            </div>
        })}
    </div>
}