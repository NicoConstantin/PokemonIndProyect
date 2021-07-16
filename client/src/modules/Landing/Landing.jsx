import PokeTitle from '../../media/TituloUniversoPokemon.png'
import s from './landing.module.css'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import {GET_TYPES,POKEMONS} from '../../utils/backendRoutes.js'
import {saveAPI,saveDB} from '../../store/actions/actions.js'
import {useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import loader from '../../media/charizard.gif'

export default function Landing(){
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        axios.get(GET_TYPES)
    },[]) 

    useEffect(()=>{
        setLoading(true)
        axios.get(POKEMONS)
        .then(response=>{
            dispatch(saveAPI(response.data[0]))
            dispatch(saveDB(response.data[1]))
            setLoading(false)
        })
    },[dispatch]) 

    return (
        <div className={s.container}>
            <img className={s.Title} src={PokeTitle} alt='Title not Found'/>
            <div className={s.center}>
                {loading?<img className={s.img} src={loader} alt='Img Not Found'/>:<NavLink to='/Home'><button className={s.button} >Home</button></NavLink>}
            </div>
        </div>
    )
}