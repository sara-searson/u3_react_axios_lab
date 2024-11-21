import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const StarshipList = (props) => {
    return (
        <>
            <h1>STARSHIPS</h1>
            <ul>
                {props.starships.map((currentStarship) => (
                    <li key={currentStarship.name}>
                        <Link to={`/starships/${currentStarship._id}`}>{currentStarship.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default StarshipList