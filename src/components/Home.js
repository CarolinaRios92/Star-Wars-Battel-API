import { Cards } from "./Cards"
import { List } from "./List"
import { NavBar } from "./NavBar"
import starWars from "../img/star-wars.png";
import { useEffect, useState } from "react"
import axios from "axios";
import "../css/styles.css";

export const Home = () => {
    const [allCharacters, setAllCharacters] = useState([]);
    const [selectedCharacters, setSelectedCharacters] = useState({
        cardLeft: {},
        cardRight: {}
    });

    const getAllCharacters = async() => {
        await axios.get("https://akabab.github.io/starwars-api/api/all.json").then(response => 
            setAllCharacters(response.data))
    }

    const search = (characterName, side) => {
        const selectedCharacter = allCharacters.find(character => character.name === characterName);
        if(side === "left"){
            if(selectedCharacter.name === selectedCharacters.cardRight.name){
                alert("No podes seleccionar el mismo personaje");
                return;
            }
            setSelectedCharacters({...selectedCharacters, cardLeft: selectedCharacter});
        }
        if(side === "right"){
            if(selectedCharacter.name === selectedCharacters.cardLeft.name){
                alert("No podes seleccionar el mismo personaje");
                return;
            }
            setSelectedCharacters({...selectedCharacters, cardRight: selectedCharacter});
        }
    }

    const random = (side) => {
        function getRandomId(max) {
        return Math.floor(Math.random() * max);
        }    
        const idRandom = getRandomId(87);
        const character = allCharacters.find(character => character.id === idRandom);
        if(side === "left"){
            if(character.name === selectedCharacters.cardRight.name){
                alert("Salió el mismo Personaje, intentalo de nuevo.");
                return;
            }
            setSelectedCharacters({...selectedCharacters, cardLeft: character});
        }
        if(side === "right"){
            if(character.name === selectedCharacters.cardLeft.name){
                alert("Salió el mismo Personaje, intentalo de nuevo.");
                return;
            }
            setSelectedCharacters({...selectedCharacters, cardRight: character});
        }
    }

    useEffect(() => {
        getAllCharacters();
    },[]);

    return (
        <div class="container-md">
            <h1 class="h1-title">Star Wars Battle</h1>
            <img class="image" src={starWars} alt="Star Wars Battle" />
            <NavBar random={random} search={search} allCharacters={allCharacters}/>
            <Cards selectedCharacters={selectedCharacters}/>
            <List allCharacters={allCharacters}/>
        </div>
    )
}