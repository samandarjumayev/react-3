import { Fragment } from "react";

export default function Routes({routes}){
    return <div className="bg-gray-300 p-2 px-3 mt-3 rounded">
        <h3 className="font-semibold text-xl">Routes - {routes.length}</h3>
        {routes.map(rout => {
            return <div key={rout.from} className="flex justify-between gap-3 py-1">
                <p>🛫 {rout.from}</p>
                <span className="flex-1 border-b-2 border-dashed h-4"></span>
                <p>{rout.duration}</p>
                <span className="flex-1 border-b-2 border-dashed h-4"></span>
                <p>{rout.to} 🛬</p>
            </div>
        })}
    </div>
}