import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConteudoEsquerdo from './componentes/ConteudoEsquerdo'
import ConteudoCentral from './componentes/ConteudoCentral'
import ConteudoDireito from './componentes/ConteudoDireito'

function App() {
  const [count, setcount] = useState(0)
  return (
    <main>

<ConteudoEsquerdo/>
    <div className='ConteudoEsquerdo'> Ex conteudo a esquerda </div>

    <ConteudoCentral/>
    <div className='ConteudoCentral'> Ex conteudo centro </div>

    <ConteudoDireito/>
    <div className='ConteudoDireito'> Ex conteudo a direita </div>

      </main>
  )
}

export default App
