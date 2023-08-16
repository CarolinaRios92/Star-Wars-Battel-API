import { Cards } from "./Cards"
import { List } from "./List"
import { NavBar } from "./NavBar"
import { useEffect, useState } from "react"
import axios from "axios"

export const Home = () => {
    const [allCharacters, setAllCharacters] = useState([]);
    const [selectedCharacters, setSelectedCharacters] = useState({
        cardLeft: {},
        cardRight: {}
    })

    const getAllCharacters = async() => {
        await axios.get("https://akabab.github.io/starwars-api/api/all.json").then(response => 
            setAllCharacters(response.data))
    }

    const search = (characterName, side) => {
        const selectedCharacter = allCharacters.find(character => character.name === characterName);
        if(side === "left"){
            setSelectedCharacters({...selectedCharacters, cardLeft: selectedCharacter});
        }
        if(side === "right"){
            setSelectedCharacters({...selectedCharacters, cardRight: selectedCharacter});
        }
    }

    useEffect(() => {
        getAllCharacters();
    },[]);

    return (
        <div>
            <h1>Star Wars Battle</h1>
            <NavBar search={search} allCharacters={allCharacters}/>
            <Cards selectedCharacters={selectedCharacters}/>
            <List allCharacters={allCharacters}/>
        </div>
    )
}