import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const PlanetsPage = () => {
    const [planet, setPlanet] = useState([])
    let {planetId} = useParams()

    useEffect(() => {
        const getPlanet = async () => {
            const res = await axios.get(`https://swapi.dev/api/planets/`)
            setPlanet(res.data.results[planetId])
        }
        getPlanet()
    },[])

    return planet ? (
        <div className="detail">
            <h2>Name: {planet.name}</h2>
            <h3>Population: {planet.population}</h3>
            <h4>Year Length: {planet.orbital_period}</h4>
            <h4>Day Length: {planet.rotation_period}</h4>
            <h4>Terrain: {planet.terrain}</h4>
            <h4>Gravity: {planet.gravity}</h4>
        </div>
    ) : <h3>Checking star charts...</h3>
}

export default PlanetsPage