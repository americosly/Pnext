import style from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <Layout titulo="Conteúdo">
            <div className={style.teste}>
            <p>Olá mundo!</p> 
            </div>

        </Layout>
    )
}