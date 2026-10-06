import estilos from './Capa.module.css';

export default function Capa () {
    return (
        <div className={estilos.capa_container}>
            <div className={estilos.container_conteudo}>
                <div className={estilos.container_texto}>
                    <p>Preços baixos em</p>
                    <h1>óculos de grau e de sol</h1>
                    <p>Você só encontra aqui</p>
                </div>
            </div>
            <div className={estilos.container_vazio}>
            </div>
        </div>
    )
}