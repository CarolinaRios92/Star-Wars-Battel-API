import { Search } from "./Search"
import { Random } from "./Random"

export const NavBar = ({allCharacters, search, random}) => {
    return (
        <div class="d-flex flex-column flex-md-row justify-content-center gap-0 gap-md-5">
            <div>
                <p class="title-character mb-1 text-center">1er Character</p>  
                <Search search={search} allCharacters={allCharacters} side="left"/>
                <Random random={random} side="left"/>
            </div>

            <div>
                <p class="title-character mb-1 text-center">2do Character</p>
                <Search search={search} allCharacters={allCharacters} side="right"/>
                <Random random={random} side="right"/>
            </div>
        </div>
    )
}