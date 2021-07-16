import { useState } from "react"
import axios from 'axios'
import { POKEMONS } from '../../utils/backendRoutes.js'
import { useDispatch, useSelector } from "react-redux"
import {addedDB} from '../../store/actions/actions.js'
import { checkSubmit, validateNumber,validateChar, validateType } from "../../utils/utilsFunctions.js"
import s from './form.module.css'
import errorpika from '../../media/errorpika.gif'
import charmander from '../../media/loadercharmander.gif'

export default function CreateForm(){
    let fields= ['name','hp','str','def','agi','height','weight']
    let numbers= fields.slice(1)
    let tempInitialState = {
        img:'',
        name:'',
        hp:'',
        str:'',
        def:'',
        agi:'',
        height:'',
        weight:'',
        type:[]
    }
    let errorInitialState = {
        ...tempInitialState,
    }
    const dispatch = useDispatch()
    const types = useSelector(state=>state.types)
    const [temp,setTemp] = useState (tempInitialState)
    const [error,setError] = useState (errorInitialState)
    const [check,setCheck] = useState(null)
    const [errSubmit,setErrSubmit] = useState(false)
    const [done,setDone] = useState(false)

    function handleInputChange (e) {
        if(numbers.includes(e.target.name)){
            validateNumber(e,setError,error,setTemp,temp)
        }
        if(e.target.name === 'name'){
            validateChar(e,setError,error,setTemp,temp)
        }
        if(e.target.name === 'type'){
            validateType(e,setTemp,temp)
        }
        if(e.target.name === 'img'){
            setTemp({
                ...temp,
                img : e.target.value
            })
        }
    }

    function handleSubmit (e){
        e.preventDefault()
        if(checkSubmit(temp)){
            //set para borrar los check seleccionados
            setTemp({
                ...temp,
                type:[]
            })
            return setErrSubmit(true)
        }else{
            axios.post(POKEMONS,temp)
            .then(()=>{
                setDone(true)
                setTimeout(()=>{
                    dispatch(addedDB(temp))
                    setCheck(false)
                    setCheck(null)
                    setDone(false)
                    setTemp(tempInitialState)
                },2000)
            })
            .catch(()=>{
                setErrSubmit(true)
            })
        }
    }

    if(errSubmit){
        setTimeout(() => setErrSubmit(false),6000)
        return (
            <div className={s.Container}>
                <div className={s.errorcontent}>
                    <h2>You forgot to complete a field or that pokemon already exists. Please check the form again</h2>
                    <img className={s.pikapika} src={errorpika} alt='Not found'/>
                </div>
            </div>
            )
    }

    return (
        <div className={s.Container}>
            <form className={s.Form} method='post' onSubmit={handleSubmit}>
                <div className={s.columnizq}>
                    <img src={done?charmander:temp.img} alt='Waiting for Img'/><br/>
                    <input className={s.textimg} name='img' type='text' placeholder='URL Image' onChange={handleInputChange} value={temp.img}/><br/>
                    {fields.map(field => {
                    return (
                        <div key={field} className={s.row}>
                            <input className={s.text} name={field} type='text' placeholder={field[0].toUpperCase()+field.slice(1)} value={temp[field]} onChange={handleInputChange}/>{error[field]?<span className={s.span}>{error[field]}</span>:null}
                        </div>
                    )
                    })}
                </div>
                <div className={s.columnder}>
                    <h2 className = {s.typetitle}>Types</h2>
                    <div className = {s.types}>
                        {types.map((t)=>{
                            return (
                                <div key={t.id} className={s.eachType}>
                                    <input className={s.checkbox} name='type' type='checkbox' checked={check} value={t.type} onChange={handleInputChange}/>
                                    <label className={s.spantype}>{t.type}</label>
                                </div>
                            )
                        })}
                        </div>
                    <input className = {s.button} name='submit' value='Crear Pokemon' type='submit'></input>
                </div>
            </form>
        </div>
    )
}
