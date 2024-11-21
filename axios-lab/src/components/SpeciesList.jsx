import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SpeciesList = () => {
    const [speciess, setSpeciess] = useState([])

    useEffect(() => {
        const getSpeciess = async() => {
            const res = await axios.get(`https://swapi.dev/api/species/`)
            setSpeciess(res.data.results)
        }
        getSpeciess()
    },[])

    let navigate = useNavigate()

    const showShip = (key) => {
        navigate(`${key}`)
    }

    return (
        <>
            <h2>STARSHIPS</h2>
            {speciess.map((species, key) => (
                <div key={key} onClick={() => showShip(key)} className='card'>
                    <h3>{species.name}</h3>
                </div>
            ))}
        </>
    )
}

export default SpeciesList