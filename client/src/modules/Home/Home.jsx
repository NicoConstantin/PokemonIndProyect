import FOS from '../FilterOrderShow/FilterOrderShow.jsx'
import Cards from '../Cards/Cards.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import s from './home.module.css'
export default function Home(){
    return (
        <div className={s.home}>
            <FOS></FOS>
            <Cards></Cards>
            <Pagination></Pagination>
        </div>
    )
}