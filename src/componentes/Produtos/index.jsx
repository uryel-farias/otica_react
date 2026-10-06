import Image from 'next/image'
import oculosGrau from '../../../public/oculos01.png'
import oculosTransition from '../../../public/oculos02.png'
import oculosSol from '../../../public/oculos03.png'
import oculosInfantil from '../../../public/oculos04.png'
import estilos from '@/componentes/Produtos/Produtos.module.css'

export default function Produtos () {
    return (
        <div className={estilos.produtos_container}>
            
            <h3>Nossos produtos</h3>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

            <div className={estilos.itens_container}>
                <div className={estilos.Card_container}>
                    <h4>Óculos de grau</h4>
                    <Image src={oculosGrau}/>
                    <span>R$ 500,00</span>
                </div>

                <div className={estilos.Card_container}>
                    <h4>Óculos transition</h4>
                    <Image src={oculosTransition}/>
                    <span>R$ 750,00</span>
                </div>

                <div className={estilos.Card_container}>
                    <h4>Óculos de sol</h4>
                    <Image src={oculosSol}/>
                    <span>R$ 700,00</span>
                </div>

                <div className={estilos.Card_container}>
                    <h4>Óculos infantil</h4>
                    <Image src={oculosInfantil}/>
                    <span>R$ 500,00</span>
                </div>

            </div>

            <h3>Todos os nossos produtos incluem:</h3>
            <ul className={estilos.lista_beneficios}>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>

        </div>
    )
}