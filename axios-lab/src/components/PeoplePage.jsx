import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const PeoplePage = () => {
    const [people, setPeople] = useState([])
    let {peopleId} = useParams()

    useEffect(() => {
        const getPeople = async() => {
            const res = await axios.get(`https://swapi.dev/api/people/`)
            setPeople(res.data.results[peopleId])
        }
        getPeople()
    },[])

    return people ? (
        <div className="detail">
            <h2>Name: {people.name}</h2>
            {/* <h3>Homeworld: {people.homeworld}</h3> */}
            <h4>Hair: {people.hair_colo}</h4>
            <h4>Eyes: {people.eye_color}</h4>
            <h4>Height: {people.height}</h4>
        </div>
    ) : <h3>Looking through the stars...</h3>
}

export default PeoplePage