import { Card } from "./Card"

export const Cards = ({selectedCharacters}) => {
    const left =  selectedCharacters.cardLeft?.name ? selectedCharacters.cardLeft : null;
    const right = selectedCharacters.cardRight?.name ? selectedCharacters.cardRight : null;

    return (
        <div class="row pt-3 gap-3 cards-conteiner">
            <div class="col-12 col-md-6" >
                <Card character={left} />
            </div>
            <div class="col">
                <Card character={right}/>
            </div>
        </div>
    )
}