import style from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso() {
    return (
        <div className={style.teste}>
            <Link href="/">Voltar</Link>
           <p>Olá mundo!</p> 
        </div>
    )
}