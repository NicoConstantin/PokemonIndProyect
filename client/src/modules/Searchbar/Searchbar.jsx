import {useState} from 'react'
import { NavLink } from 'react-router-dom';
import s from './searchBar.module.css'

export default function Searchbar(){
    const [name,setName] = useState('')

    function handleChange (e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <form className={s.search} onSubmit={handleSubmit}>
            <input className={s.text}type='text' placeholder='What are you looking for?' value={name} onChange={handleChange}/>
            <NavLink to = {`/PokeDetail/${name}`} ><input className={s.button} type='submit'value ='Search'/></NavLink>
        </form>
    )
}