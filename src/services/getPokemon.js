import axios from 'axios'

export default async function getPokemon(name) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return {
            name: response.data.name,
            stats: response.data.stats,
            sprites: response.data.sprites.front_default
        }
    } catch (error) {
        console.log(error)
    }
}