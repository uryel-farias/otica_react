import Logo from '../../../public/logo.png';
import Image from "next/image";
import Link from "next/link";
import estilos from "@/componentes/Topo/Topo.module.css";

export default function Topo () {
    return (
        <>
          <div className={estilos.topo_container}>
            <div className={estilos.topo_content}>
              <Image src={Logo} alt="Logomarca do site"></Image>
              
              <nav className={estilos.nav_container}>
                <ul className={estilos.lista_links}>
                  <li><Link className={estilos.link} href="#">Produtos</Link></li>
                  <li><Link className={estilos.link} href="#">Sobre</Link></li>
                  <li><Link className={estilos.link} href="#">Contato</Link></li>
                </ul>
              </nav>
            </div>
          </div>
    
        </>
      );

}