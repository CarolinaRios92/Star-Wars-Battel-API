import { Card } from "./Card"

export const Cards = ({selectedCharacters}) => {
    const left =  selectedCharacters.cardLeft?.name ? selectedCharacters.cardLeft : null;
    const right = selectedCharacters.cardRight?.name ? selectedCharacters.cardRight : null;

    return (
        <div class="d-flex flex-column flex-md-row justify-content-center mt-3 gap-4">
            <div>
                <Card character={left} />
            </div>
            <div>
                <Card character={right}/>
            </div>
        </div>
    )
}