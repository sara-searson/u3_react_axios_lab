import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const StarshipPage = () => {
    const [starship, setStarship] = useState([])
    let {starshipId} = useParams()

    useEffect(() => {
        const getStarship = async() => {
            const res = await axios.get(`https://swapi.dev/api/starships/`)
            setStarship(res.data.results[starshipId])
        }
        getStarship()
    },[])

    return starship ? (
        <div className="detail">
            <h2>Name: {starship.name}</h2>
            {starship.name === starship.model ? <br /> : <h3>Model: {starship.model}</h3>}
            <h4>Price: {starship.cost_in_credits}</h4>
            <h4>Size: {starship.length}</h4>
            <h4>Crew: {starship.crew}</h4>
            <h4>Passengers: {starship.passengers}</h4>
        </div>
    ) : <h3>Looking through the stars...</h3>
}

export default StarshipPage