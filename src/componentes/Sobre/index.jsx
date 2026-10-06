import estilos from "@/componentes/Sobre/Sobre.module.css"
import Image from "next/image"
import loja from "../../../public/loja.png"
import atendimento from "../../../public/atendimento.png"

export default function Sobre () {
    return (
        <div className={estilos.sobre_container}>
            <div className={estilos.quem_somos}> 
                <h3>quem somos nós?</h3>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            </div>

            <div className={estilos.conteudo_container}> 
                <Image src={loja}/>
                <div className={estilos.conteudo_texto}>
                    <h4>nossas filiais</h4>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div className={`${estilos.conteudo_texto} ${estilos.borda_responsiva}`}>
                    <h4 className={estilos.titulo_quebrado}>atendimento flexível</h4>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div>
                <Image src={atendimento}/>
            </div>

        </div>
    )
}