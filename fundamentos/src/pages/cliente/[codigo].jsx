import Layout from "../../components/Layout";
import { useRouter } from 'next/router'

export default function Cliente(){
    const router = useRouter()
    return (
        <Layout titulo="Navegação com link dinâmico!">
            <h1>Código= {router.query.codigo}</h1>
        </Layout>
    )
}