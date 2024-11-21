import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/starships">Starships</Link></li>
                    <li><Link to="/films">Films</Link></li>
                    <li><Link to="/planets">Planets</Link></li>
                    <li><Link to="/people">People</Link></li>
                    <li><Link to="/species">Species</Link></li>
                    <li><Link to="/vehicle">Vehicle</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar