import { useState } from "react"

export const Search = ({search, side}) => {
    const [input, setInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        search(input, side)
    }

    return (
        <form class="row mb-2 gap-1 mt-0" onSubmit={handleSearch}>
            <input 
                type="text"
                value={input}
                class="col-9"
                onChange={(e) => setInput(e.target.value)}/>
            <button class="btn btn-warning btn-sm col text-bold" type="submit">Find</button>
        </form>
    )
}