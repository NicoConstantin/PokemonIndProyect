import {NavLink} from 'react-router-dom'
import s from './Card.module.css'
export default function Card ({name,img,type}) {
    return(
        <div className={s.container}>
            <div className={s.card}>
            <img className={s.image} src={img} alt={name}/>
            <NavLink className={s.name} to={`/PokeDetail/${name}`}><h4>{name}</h4></NavLink>
            <h4>Type:</h4>
            <p>{type.join(' & ')}</p>
            </div>
        </div>
    )
}