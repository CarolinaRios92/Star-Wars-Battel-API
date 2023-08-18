// El componente Card es un slide que muestra y oculta una card que contiene al menos 6 atributos del character, entre estos deben estar si o sí: image, name e id
import logo from "../img/logo.png"

export const Card = ({character}) => {
    return (
        <div class="card text-bg-light border-warning min-size">
                {!character && (
                    <div class="min-size d-flex justify-content-center flex-column gap-2">
                        <img class="w-50 mx-auto" src={logo} alt="star wars logo" />
                        <p class="text-center text-bold fs-5">Select a Character!</p>
                    </div>
                )}
                {character?.name && (
                <div>
                    <p class="card-header text-title">{character.name}</p>
                    <div class="image-conteiner">
                        <img 
                        class="card-img-top image-character"
                        src={character.image} 
                        alt={character.name} />
                    </div>
                    
                    <div class="card-body text-center">
                        <p><b>Species:</b> <span class="text-capitalize">{character.species}</span></p>
                        {character.homeworld && (<p><b>Home world: </b> <span class="text-capitalize">{character.homeworld}</span></p>)}
                        {character.gender && (<p><b>Gender: </b> <span class="text-capitalize">{character.gender}</span></p>)}
                        {character.born && (<p><b>Born: </b> {character.born}</p>)}
                        {character.died && (<p><b>Died: </b> {character.died}</p>)}
                        {character.mass && (<p><b>Mass: </b> {character.mass}</p>)}
                    </div>
                </div>
                )}
        </div>
    )
}