import { Search } from "./Search"
import { Random } from "./Random"

export const NavBar = ({allCharacters, search, random}) => {
    return (
        <div>
            <p>1er Character</p>
            <Search search={search} allCharacters={allCharacters} side="left"/>
            <Random random={random} side="left"/>

            <p>2do Character</p>
            <Search search={search} allCharacters={allCharacters} side="right"/>
            <Random random={random} side="right"/>
        </div>
    )
}