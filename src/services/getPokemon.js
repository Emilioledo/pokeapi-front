import axios from 'axios'
const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/'

export default async function getPokemon(id) {
    console.log(id)
    try {
        const response = await axios.get(ENDPOINT, {
            params: {
                pokemon: (id)
            }
        })
        console.log(ENDPOINT)
        console.log(response.data.results)
    } catch (error) {
        console.log(error)
    }
}