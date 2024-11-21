import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        const getVehicles = async() => {
            const res = await axios.get(`https://swapi.dev/api/vehicles/`)
            setVehicles(res.data.results)
        }
        getVehicles()
    },[])

    let navigate = useNavigate()

    const showShip = (key) => {
        navigate(`${key}`)
    }

    return (
        <>
            <h2>STARSHIPS</h2>
            {vehicles.map((vehicle, key) => (
                <div key={key} onClick={() => showShip(key)} className='card'>
                    <h3>{vehicle.name}</h3>
                </div>
            ))}
        </>
    )
}

export default VehicleList