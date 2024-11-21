import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"


const VehiclePage = () => {
    const [vehicle, setVehicle] = useState([])
    let {vehicleId} = useParams()

    useEffect(() => {
        const getVehicle = async() => {
            const res = await axios.get(`https://swapi.dev/api/vehicles/`)
            setVehicle(res.data.results[vehicleId])
        }
        getVehicle()
    },[])

    return vehicle ? (
        <div className="detail">
            <h2>Name: {vehicle.name}</h2>
            {vehicle.name === vehicle.model ? <br /> : <h3>Model: {vehicle.model}</h3>}
            <h4>Price: {vehicle.cost_in_credits}</h4>
            <h4>Size: {vehicle.length}</h4>
            <h4>Crew: {vehicle.crew}</h4>
            <h4>Passengers: {vehicle.passengers}</h4>
        </div>
    ) : <h3>Looking through the stars...</h3>
}

export default VehiclePage