import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ConteudoEsquerdo from './componentes/ConteudoEsquerdo'
import ConteudoCentral from './componentes/ConteudoCentral'
import ConteudoDireito from './componentes/ConteudoDireito'

import './App.css'

function App() {

  return (
    <main>
      <ConteudoEsquerdo />
      <ConteudoDireito />
      <ConteudoCentral />
    </main>
  )
}

export default App
