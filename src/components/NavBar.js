import { Search } from "./Search"
import { Random } from "./Random"

export const NavBar = ({allCharacters, search}) => {
    return (
        <div>
            <p>1er Character</p>
            <Search search={search} allCharacters={allCharacters} side="left"/>
            <Random side="left"/>

            <p>2do Character</p>
            <Search search={search} allCharacters={allCharacters} side="right"/>
            <Random side="right"/>
        </div>
    )
}