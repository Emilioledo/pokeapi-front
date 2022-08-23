import { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../../../context/PokemonContext'
import { FaArrowUp, FaArrowDown } from "react-icons/fa"
import './PokemonCard.css'

export default function PokemonCard() {
    const [loading, setLoading] = useState(false)
    const { pokemon, sortAscending, sortDescending } = useContext(PokemonContext)

    useEffect(() => {
        if (pokemon.sprites === null) {
            setLoading(false)
        } else {
            setLoading(true)
        }
    }, [pokemon])

    return (
        <div>
            {loading === false ? (<h4>No information received</h4>) : (
                <div>
                    <img className='center' src={`${pokemon.sprites}`} alt="pokemon"></img>
                    <h3>{pokemon.name}</h3>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>name</th>
                                <th>effort</th>
                                <th><FaArrowUp onClick={sortAscending} />value <FaArrowDown onClick={sortDescending} /> </th>
                            </tr>
                            {pokemon.stats.map(i => (
                                <tr key={i.index}>
                                    <td>{i.stat.name}</td>
                                    <td>{i.effort}</td>
                                    <td>{i.base_stat}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}