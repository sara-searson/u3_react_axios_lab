import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="starships">Starships</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar