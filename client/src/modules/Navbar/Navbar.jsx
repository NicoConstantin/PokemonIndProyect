import {NavLink} from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar.jsx'
import masterball from '../../media/masterball.png'
import s from './navBar.module.css'
export default function Navbar(){
    return (
        <div className={s.navbar}>
            <img src={masterball} alt='Img not Found' ></img>
            <div className={s.contenedorLink}>
            <NavLink className={s.link} activeClassName={s.linkActive} exact to='/Home'>Home</NavLink>
            <NavLink className={s.link} activeClassName={s.linkActive} exact to='/Create'>Create</NavLink>
            </div>
            <div className={s.search}><Searchbar/></div>
        </div>
    )
}