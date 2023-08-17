import { Search } from "./Search"
import { Random } from "./Random"

export const NavBar = ({allCharacters, search, random}) => {
    return (
        <div class="row gap-4">
            <div class="col-12 col-md-6">
                <p class="title-character mb-1 text-center">1er Character</p>  
                <Search search={search} allCharacters={allCharacters} side="left"/>
                <Random random={random} side="left"/>
            </div>

            <div class="col">
                <p class="title-character mb-1 text-center">2do Character</p>
                <Search search={search} allCharacters={allCharacters} side="right"/>
                <Random random={random} side="right"/>
            </div>
        </div>
    )
}