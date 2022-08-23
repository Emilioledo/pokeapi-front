import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className="topnav">
            <Link to="/">
                <h4 className="nav-title">POKEAPI</h4>
            </Link>
        </div>
    )
}