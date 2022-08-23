import { useState } from 'react'
import { useParams } from 'react-router-dom'
import getPokemon from '../../../services/getPokemon'

export default function PokemonForm() {
    const [name, setName] = useState('')
    const { id } = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(id)
        getPokemon(id)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={name} placeholder="select your pokemon" onChange={(e) => setName(e.target.value)} required></input>
            </div>
            <button>Search</button>
        </form >
    )
}