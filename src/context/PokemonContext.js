import { createContext, useState } from 'react'

const PokemonContext = createContext()

export default function PokemonProvider({ children }) {
    const [pokemon, setPokemon] = useState({
        name: '',
        stats: [],
        sprites: null
    })

    function sortAscending() {
        setPokemon({
            name: pokemon.name,
            stats: pokemon.stats.sort((a, b) => a.base_stat - b.base_stat),
            sprites: pokemon.sprites
        })
    }

    function sortDescending() {
        setPokemon({
            name: pokemon.name,
            stats: pokemon.stats.sort((a, b) => b.base_stat - a.base_stat),
            sprites: pokemon.sprites
        })
    }

    const data = {
        setPokemon,
        pokemon,
        sortAscending,
        sortDescending
    }

    return (
        <PokemonContext.Provider value={data}>
            {children}
        </PokemonContext.Provider>
    )
}

export { PokemonContext }