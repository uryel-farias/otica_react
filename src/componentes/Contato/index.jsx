import Local from '../../../public/local.png'
import Fone from '../../../public/telefone.png'
import Email from '../../../public/email.png'
import Face from '../../../public/fb.png'
import Insta from '../../../public/ig.png'
import X from '../../../public/tt.png'

import Image from 'next/image'
import estilos from '../../componentes/Contato/Contato.module.css'


export default function Contato () {
    return (
        <div className={estilos.contato_container}>
            <div className={estilos.info_container}>
                <h3>Fale conosco</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </div>

            <div className={estilos.detalhes_container}>
                <div className={estilos.contato_card}>
                    <h3>Nossos Contatos</h3>
                    <div className={estilos.contatos}>
                        <Image src={Local} />
                        <span>Nova Iguaçu, RJ</span>
                    </div>
                    <div className={estilos.contatos}>
                        <Image src={Fone} />
                        <span>(21) 9999-9999</span>
                    </div>
                    <div className={estilos.contatos}>
                        <Image src={Email} />
                        <span>contato@oticavida.com</span>
                    </div>
                </div>

                <div className={estilos.contato_card}>
                    <h3>Nossas Redes Sociais</h3>
                    <div className={estilos.contatos}>
                        <Image src={Face} />
                        <span>/OticaVida</span>
                    </div>
                    <div className={estilos.contatos}>
                        <Image src={Insta} />
                        <span>@oticavidarj</span>
                    </div>
                    <div className={estilos.contatos}>
                        <Image src={X} />
                        <span>@oticavidarj</span>
                    </div>
                </div>
            </div>

        </div>
    )
}