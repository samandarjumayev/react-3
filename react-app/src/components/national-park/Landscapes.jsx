import { Fragment } from "react";

export default function Landscapes({land}){
    return <div className="bg-gray-700 my-2 py-1 px-4 rounded">
        <h3 className="text-xl font-semibold text-white my-1">Land Scapes</h3>
        {land.map((item, index) => {
            return <div key={index} className="bg-gray-500 my-2 py-1 px-3 rounded">
                <h3 className="">
                    <span className="font-semibold">{item.name}</span> - <span>{item.type}</span>
                </h3>
                <div className="flex gap-3 my-1">
                    {item.images.map((img, index) => {
                        return <img className="w-[32%] rounded-lg cursor-pointer transition-all duration-200 hover:scale-108" key={index} src={img} alt="" />
                    })}
                </div>
            </div>
        })}
    </div>
}