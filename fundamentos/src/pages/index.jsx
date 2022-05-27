import Link from 'next/link'
import Navegador from '../components/Navegador'


export default function Inicio() {
    return (
        <div style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador destino="/estiloso" tituloLink="Estilo"/>
            <Navegador destino="/navegacao" tituloLink="Navegação"/>
            <Navegador destino="/cliente/123" tituloLink="Navegação Dinâmica"/>
            <Navegador destino="/estado" tituloLink="Componente com estado"/>
        </div>
        
    ) 
    
}