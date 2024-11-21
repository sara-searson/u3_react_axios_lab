import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const PeopleList = () => {
    const [peoples, setPeoples] = useState([])

    useEffect(() => {
        const getPeoples = async() => {
            const res = await axios.get(`https://swapi.dev/api/people/`)
            setPeoples(res.data.results)
        }
        getPeoples()
    },[])

    let navigate = useNavigate()

    const showShip = (key) => {
        navigate(`${key}`)
    }

    return (
        <>
            <h2>STARSHIPS</h2>
            {peoples.map((people, key) => (
                <div key={key} onClick={() => showShip(key)} className='card'>
                    <h3>{people.name}</h3>
                </div>
            ))}
        </>
    )
}

export default PeopleList