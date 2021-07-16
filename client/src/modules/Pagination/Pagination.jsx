import { useSelector } from "react-redux";
import {actualPage} from '../../store/actions/actions.js'
import {useDispatch} from 'react-redux'
import s from './paginationCSS.module.css'

export default function Pagination () {
    const dispatch = useDispatch()
    const Pages = useSelector(state=>state.pages)
    return (
        <div className={s.pagination}>
            {Pages.map(page=>{
                return <button key={page} className={s.button} value={page} onClick={() =>{dispatch(actualPage(page))}}>{page}</button>
            })}
        </div>
    )
}