import { useState } from "react";

export const List = ({allCharacters}) => {
    const [showNames, setShowNames] = useState(false);

    return (
        <div>
            <p class="text-center fs-3 pt-5 text-color">List of Characters</p>
            <div class="d-flex justify-content-center pb-3">
                <button
                class="btn btn-light border-warning text-bold mb-3"
                onClick={() => setShowNames(!showNames)}>{showNames ? "Hide All Names" : "Show All Names"}</button>
            </div>
                {showNames && allCharacters.map(character => (
                    <p 
                        class="text-center fs-5"
                        key={character.id}>{character.name}</p>
                ))}
        </div>
        
    )
}