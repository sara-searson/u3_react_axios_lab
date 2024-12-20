import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const StarshipList = () => {

    const [starships, setStarships] = useState([])

    useEffect(() => {
        const getStarships = async() => {
            const res = await axios.get(`https://swapi.dev/api/starships/`)
            setStarships(res.data.results)
        }
        getStarships()
    },[])

    let navigate = useNavigate()

    const showShip = (key) => {
        navigate(`${key}`)
    }

    return (
        <>
            <h2>STARSHIPS</h2>
            {starships.map((starship, key) => (
                <div key={key} onClick={() => showShip(key)} className='card'>
                    <h3>{starship.name}</h3>
                </div>
            ))}
        </>
    )
}

export default StarshipList