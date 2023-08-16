import { useState } from "react"

export const Search = ({search, side}) => {
    const [input, setInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        search(input, side)
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