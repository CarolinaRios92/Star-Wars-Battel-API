import { Search } from "./Search"

export const NavBar = ({characters}) => {
    return (
        <div>
            <p>Search</p>
            <Search characters={characters}/>
        </div>
    )
}