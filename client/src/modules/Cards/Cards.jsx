import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card.jsx'
import {FilterAndOrder, paginetedResults} from '../../utils/utilsFunctions.js'
import { QtyPages } from '../../store/actions/actions.js'
import pikachu from '../../media/pikachu.gif'
import s from './cards.module.css'

export default function Cards () {
    const dispatch = useDispatch()
    const pokeAPI =useSelector(state=>state.pokemonsAPI)
    const pokeDB =useSelector(state=>state.pokemonsDB)
    const orAlph = useSelector(state=>state.orderAlph)
    const filter = useSelector(state=>state.filterType)
    const orStr = useSelector(state=>state.orderStr)
    const page = useSelector(state=>state.actualPage)
    const limit = useSelector(state=>state.limit)
    const show = useSelector(state=>state.show)

    let done = []
    switch(show){
        case 'API':{
            done = FilterAndOrder(pokeAPI,orAlph,orStr,filter)
            break;
        }
        case 'DB':{
            done = FilterAndOrder(pokeDB,orAlph,orStr,filter)
            break;
        }
        default:{
            let pokemons = pokeAPI.concat(pokeDB)
            done = FilterAndOrder(pokemons,orAlph,orStr,filter)
            break;
        };
    }
    let {results,cantPages} = paginetedResults(done,page,limit)
    dispatch(QtyPages(cantPages))
    if(results.length===0){
        return (
            <div className={s.Loader}>
                <h2 className={s.TitleLoader}>There are no pokemons with those characteristics.</h2>
                <h3 className={s.TitleLoaderLow}>Please Re-Filter</h3>
                <img className={s.Image} src={pikachu} alt ='Not Found'/>
            </div>
        )
        
    }
    return (
        <div className={s.Cards}>
        {results.map(p=><Card key={p.name} name={p.name} img={p.img} type={p.type}></Card>)}
        </div>
    )
}