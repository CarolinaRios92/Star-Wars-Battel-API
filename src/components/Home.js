import { Cards } from "./Cards"
import { List } from "./List"
import { NavBar } from "./NavBar"
import { useEffect, useState } from "react"
import axios from "axios"

export const Home = () => {
    const [allCharacters, setAllCharacters] = useState([]);

    const getAllCharacters = async() => {
        await axios.get("https://akabab.github.io/starwars-api/api/all.json").then(response => 
            setAllCharacters(response.data))
    }

    useEffect(() => {
        getAllCharacters();
    })

    return (
        <div>
            <h1>Star Wars Battle</h1>
            <NavBar />
            <Cards />
            <List characters={allCharacters}/>
        </div>
    )
}