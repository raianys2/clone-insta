import ItemMenuLateralEsquerda from "./ItemMenuLateralEsquerda"
import {BiHomeHeart} from 'react-icons/bi'
import {BsSearchHeart} from 'react-icons/bs'

export default function ConteudoEsquerdo() {

    return (
        <div className="ConteudoEsquerdo">
            <div className="logo"></div>
            <div>
                <div className="menu">
                    <ul>
                        <ItemMenuLateralEsquerda icone={<BiHomeHeart/>} texto="Home" />
                        <ItemMenuLateralEsquerda icone={<BsSearchHeart/>} texto="Buscar"/>
                        <ItemMenuLateralEsquerda icone="Caixa" texto="Explorar" />
                        <ItemMenuLateralEsquerda icone="Interoog" texto="Exemplo" />
                        <li>Menu</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}