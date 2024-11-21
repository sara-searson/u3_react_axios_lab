import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const SpeciesPage = () => {
    const [species, setSpecies] = useState([])
    let {speciesId} = useParams()

    useEffect(() => {
        const getSpecies = async() => {
            const res = await axios.get(`https://swapi.dev/api/species/`)
            setSpecies(res.data.results[speciesId])
        }
        getSpecies()
    },[])

    return species ? (
        <div className="detail">
            <h2>Name: {species.name}</h2>
            <h3>Classification: {species.classification}</h3>
            <h4>Height: {species.average_height}</h4>
            <h4>Lifespan: {species.average_lifespan}</h4>
            <h4>Language: {species.language}</h4>
        </div>
    ) : <h3>Looking through the stars...</h3>
}

export default SpeciesPage