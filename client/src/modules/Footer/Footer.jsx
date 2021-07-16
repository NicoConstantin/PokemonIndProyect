import s from './Footer.module.css'
import BackgroundMusic from '../../media/BackgroundMusic.mp3'
import { useEffect, useRef } from 'react'

export default function Footer(){
    const audio = useRef()
    useEffect(()=>{
        audio.current.volume = 0.5
    },[])
    return (
        <footer className= {s.footer}>
            <div className= {s.container}>
                <div className= {s.row}>
                    <div className={s.footercol}>
                        <h4>About Proyect</h4>
                        <p>Proyect: PI_Pokemon_API</p>
                        <p>Reviser: Toni Tralice</p>
                        <p>Year 2021</p>
                    </div>
                    <div className={s.footercol}>
                        <h4>Created By</h4>
                        <p>Constantin Nicolas</p>
                        <p>My First proyect</p>
                        <p>SoyHenry! Cohorte 12</p>
                        <br/>
                        <br/>
                        <audio src={BackgroundMusic} ref={audio} controls autoPlay/>
                    </div>
                    <div className={s.footercol}>
                        <h4>Implemented Technologies</h4>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Express</li>
                            <li>NodeJS</li>
                            <li>PostgreSQL</li>
                            <li>Sequelize</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}