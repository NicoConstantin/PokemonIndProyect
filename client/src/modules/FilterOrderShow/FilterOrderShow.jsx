import {show,showQty,saveType,FilterType, OrderAlph,OrderStr} from '../../store/actions/actions.js'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import axios from 'axios'
import {GET_TYPES} from '../../utils/backendRoutes.js'
import s from './FandO.module.css'

export default function FOS () {
    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get(`${GET_TYPES}/find`)
        .then(response=>dispatch(saveType(response.data)))
    },[dispatch])

    const types = useSelector(state => state.types)

    return (
        <div className={s.container}>
        <form>
            <select className={s.selector} id='Order_Alph' defaultValue="No Order">
                <option onClick={()=>dispatch(OrderAlph(''))}>No Order</option>
                <option onClick={()=>dispatch(OrderAlph('alph'))}>A-Z</option>
                <option onClick={()=>dispatch(OrderAlph('alphreverse'))}>Z-A</option>
            </select>
            <select className={s.selector} id='Order_Str'defaultValue="No Order">
                <option onClick={()=>dispatch(OrderStr(''))}>No Order</option>
                <option onClick={()=>dispatch(OrderStr('strong'))}>Strong-Weak</option>
                <option onClick={()=>dispatch(OrderStr('weak'))}>Weak-Strong</option>
            </select>
            <select className={s.selector} id='Filter_Type' defaultValue="All Types">
                <option onClick={()=>dispatch(FilterType(''))}>All Types</option>
                {types.map(t=>{
                    return <option key={t.type} onClick={()=>dispatch(FilterType(t.type))}>{t.type}</option>
                })}
            </select>
            <select className={s.selector} name='Show'defaultValue={12}>
                <option onClick={()=>dispatch(showQty(6))} value={6}>6</option>
                <option onClick={()=>dispatch(showQty(12))} value={12}>12</option>
                <option onClick={()=>dispatch(showQty(24))} value={24}>24</option>
                <option onClick={()=>dispatch(showQty(50))} value={50}>50</option>
            </select>
            <select className={s.selector} name='DBorAPI' defaultValue={'Show All'}>
                <option onClick={()=>dispatch(show('All'))} value={'All'}>Show All</option>
                <option onClick={()=>dispatch(show('API'))} value={'API'}>Only Originals</option>
                <option onClick={()=>dispatch(show('DB'))} value={'DB'}>Only Created</option>
            </select>
        </form>
        </div>
    )
}