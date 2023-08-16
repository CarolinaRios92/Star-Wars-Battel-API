import { useState } from "react";

export const List = ({characters}) => {
    const [showNames, setShowNames] = useState(false);

    return (
        <div>
            <p>List of Characters</p>
            <button
                onClick={() => setShowNames(!showNames)}>Set Characters</button>
                {showNames && characters.map(character => (
                    <p key={character.id}>{character.name}</p>
                ))}
        </div>
        
    )
}