import ItemMenu from "./ItemMenu";
import LogoInsta from "../assets/LogoInsta.png";

export default function ConteudoEsquerdo () {
    return(
        <div className="ConteudoEsquerdo">
            <div className="WrapLogo">
                <img className="LogoInsta" src={LogoInsta} alt="Logo Instagram"/>
            </div>
            <div className='wrapMenu'>
                <ul>
                   <ItemMenu icone="Casa" texto="Home" />
                   <ItemMenu icone="Lupa" texto="Buscar" />
                   <ItemMenu icone="Compass" texto="Explorar" />
        
                </ul>
            </div>
            {/* Exemplo de conteúdo à esquerda */}
        </div>
    )
}

function x (nome, cidade) {
    alert("Olá " + nome)
}
