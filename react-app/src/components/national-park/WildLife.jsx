import { Fragment } from "react";

export default function WildLife({wild}){
    return <div className="bg-gray-400 mt-2 py-1 px-4 rounded">
        <h3 className="text-xl font-medium">Wild Life</h3>
        <div className="flex gap-3">
            {wild.map((item, index) => {
                return <p key={index} className="bg-gray-300 my-1 py-1 px-4 cursor-pointer rounded transition-all duration-300 hover:bg-gray-100">{item}</p>
            })}
        </div>
    </div>
}