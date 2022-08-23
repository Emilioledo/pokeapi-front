import { useContext, useEffect, useState } from 'react'
import getPokemon from '../../../services/getPokemon'
import { PokemonContext } from '../../../context/PokemonContext'
import './PokemonForm.css'

export default function PokemonForm() {
    const [name, setName] = useState('')
    const { pokemon, setPokemon } = useContext(PokemonContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await getPokemon(name)
        setPokemon(result)
    }

    useEffect(() => { }, [pokemon])

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div>
                <input type="text" value={name} placeholder="select your pokemon" onChange={(e) => setName(e.target.value)} required></input>
            </div>
            <button className='btn'>Search</button>
        </form >
    )
}