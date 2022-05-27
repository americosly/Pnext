import Link from 'next/link'
import styles from '../styles/Navegador.module.css'

export default function Navagador(props) {
    return (

        <div>
            <Link href={props.destino}>
                <div className={styles.navegador}>
                    {props.tituloLink}

                </div>
            </Link>
        </div>

    )
}