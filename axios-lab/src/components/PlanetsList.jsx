import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const PlanetsList = () => {
    const [planets, setPlanets] = useState([])
    
    useEffect(() => {
        const getPlanets = async () => {
            const res = await axios.get(`https://swapi.dev/api/planets`)
            setPlanets(res.data.results)
        }
        getPlanets()
    },[])

    let navigate = useNavigate()

    const showPlanet = (key) => {
        navigate(`${key}`)
    }

    return (
        <>
            <h2>PLANETS</h2>
            {planets.map((planet, key) => (
                <div key={key} onClick={() => showPlanet(key)} className='card'>
                    <h3>{planet.name}</h3>
                </div>
            ))}
        </>
    )
}

export default PlanetsList