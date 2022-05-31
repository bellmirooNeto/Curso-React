
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default function Principal(props) {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <Aleatorio min={5} max={9} />
            <Fragmento />
            <Primeiro />
            <ComParametro
                titulo="Situação do aluno"
                aluno="Junior"
                nota={8.5} />
            
        </div>
    )
}
