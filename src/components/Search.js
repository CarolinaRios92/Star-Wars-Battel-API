import { useState } from "react"

export const Search = ({characters}) => {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        const character = characters.find(character => character.name === input);
        console.log(character);
    }

    return (
        <form onSubmit={handleSearch}>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}/>
            <button type="submit">Find</button>
        </form>
    )
}