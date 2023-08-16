// El componente Card es un slide que muestra y oculta una card que contiene al menos 6 atributos del character, entre estos deben estar si o sí: image, name e id

export const Card = ({character}) => {
    return (
        <div>
            {character?.name && (
                <div>
                    <img src={character.image} alt={character.name} />
                    <p>Name: {character.name}</p>
                    <p>Species: {character.species}</p>
                    {character.born && (<p>Born: {character.born}</p>)}
                    {character.died && (<p>Died: {character.died}</p>)}
                    {character.masters && (
                        <div>
                            <p>Masters:</p>
                            <ul>
                                {character.masters?.map(master => (
                                    <li key={master}>{master}</li>
                                ))}
                            </ul>
                        </div>)}
                    {character.apprentices && (
                        <div>
                            <p>Apprentices:</p>
                            <ul>
                                {character.apprentices?.map(apprentice => (
                                    <li key={apprentice}>{apprentice}</li>
                                ))}
                            </ul>
                        </div>)}
                </div>
                
            )}
        </div>
    )
}