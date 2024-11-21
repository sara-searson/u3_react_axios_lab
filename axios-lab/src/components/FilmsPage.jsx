import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const FilmsPage = () => {
    const [film, setFilm] = useState([])
    let {filmId} = useParams()

    useEffect (() => {
        const getFilm = async () => {
            const res = await axios.get(`https://swapi.dev/api/films/`)
            setFilm(res.data.results[filmId])
        }
        getFilm()
    },[])

    return film ? (
        <div className='detail'>
            <h2>Title: {film.title}</h2>
            <h3>Episode: {film.episode_id}</h3>
            <h4>{film.opening_crawl}</h4>
            <h4>Directed By: {film.director}</h4>
            <h4>Produced By: {film.producer}</h4>
            <h4>Released: {film.release_date}</h4>
        </div>
    ) : <h3>Checking movie posters...</h3>
}

export default FilmsPage