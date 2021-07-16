import axios from "axios"
import { useEffect, useState } from "react"
import { POKEMONS } from "../../utils/backendRoutes"
import s from './detail.module.css'
import charmander from '../../media/loadercharmander.gif'
import pikachu from '../../media/errorpika.gif'

export default function PokeDetail ({name}) {
    const [pokemon,setPokemon] = useState({})
    const [loader,setLoader] = useState(true)
    const [fail,setFail] = useState(false)

    useEffect(()=>{
        axios.get(`${POKEMONS}?name=${name}`)
        .then(response=>{
            if(response.status === 404){
                setFail(true)
                setLoader(false)
            }
            else{
                setFail(false)
                setPokemon(response.data)
                setLoader(false)
            }
        })
        .catch(()=>{
            setFail(true)
        })
    },[name])

    if(loader){
        return (
            <div className={s.container}>
                <div className={s.containergif}>
                    <img className={s.gif} src={charmander} alt='Not Found'/>
                </div>
            </div> 
        )
    }
    if(fail){
        return (
            <div className={s.container}>
                <div className={s.containerfail}> 
                    <h2>That pokemon doesn't exist</h2>
                    <h2>Let's find another!</h2>
                    <img className={s.gif} src={pikachu} alt='Not Found'/>
                </div>
            </div> 
        )
    }
    return (
        <div className={s.container}>
            <div className={s.bigcard}>
                <img className={s.image} src={pokemon.img} alt={pokemon.name}/>
                <div className={s.info}>
                    <h2>{pokemon.name.toUpperCase()}</h2>
                    <div>
                        <p>ID: {pokemon.id}</p>
                        <p>Health: {pokemon.hp}</p>
                        <p>Strenght: {pokemon.str}</p>
                        <p>Defense: {pokemon.def}</p>
                        <p>Agility: {pokemon.agi}</p>
                        <p>Height: {pokemon.height}</p>
                        <p>Weight: {pokemon.weight}</p>
                        <p>Types: {pokemon.type.join(' ')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}