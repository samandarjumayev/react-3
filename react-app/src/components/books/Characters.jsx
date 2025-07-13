import { Fragment } from "react";

export default function Characters({characters}){
    return <div className="bg-gray-400 my-2 py-1 px-3 rounded">
        <h3 className="text-xl font-medium">Characters</h3>
        <table className="w-[100%] my-2">
            <tr className="bg-gray-500 w-[100%]">
                <th className="border text-cyan-400 border-black py-1">Name</th>
                <th className="border text-cyan-400 border-black">Role</th>
            </tr>

            {characters.map(character => {
                return <tr>
                    <td className="border text-center bg-gray-300 py-[3px]">{character.name}</td>
                    <td className="border text-center bg-gray-300">{character.role}</td>
                </tr>
            })}

        </table>
    </div>
}