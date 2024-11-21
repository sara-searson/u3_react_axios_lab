import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const FilmsList = () => {

    const [films, setFilms] = useState([])

    useEffect(() => {
        const getFilms = async() => {
            const res = await axios.get(`https://swapi.dev/api/films/`)
            setFilms(res.data.results)
        }
        getFilms()
    },[])

    let navigate = useNavigate()

    const showFilm = (key) => {
        navigate(`${key}`)
    }

    return (
        <>
            <h2>FILMS</h2>
            {films.map((films, key) => (
                <div key={key} onClick={() => showFilm(key)} className='card'>
                    <h3>{films.title}</h3>
                </div>
            ))}
        </>
    )
}

export default FilmsList