import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to='/'>POKE-API</Link></li>
            </ul>
        </div>
    )
}