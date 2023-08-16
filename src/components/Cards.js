import { Card } from "./Card"

export const Cards = ({selectedCharacters}) => {
    const left =  selectedCharacters.cardLeft?.name ? selectedCharacters.cardLeft : null;
    const right = selectedCharacters.cardRight?.name ? selectedCharacters.cardRight : null;

    return (
        <div>
            <Card character={left} />
            <Card character={right}/>
        </div>
    )
}