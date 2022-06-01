import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'

export default function Principal(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">

                <Card titulo="#07 - Desafio Repetição  " color="#3A9AD9">
                    <TabelaProdutos />
                </Card>

                <Card titulo="#06 - Repetição " color="#FF4C65">
                    <ListaAlunos />
                </Card>

                <Card titulo="#05 - Componentes com filhos" color="#00C8F8">
                    <Familia sobrenome="Lima">
                        <FamiliaMembro nome="Belmiro" />
                        <FamiliaMembro nome="Helder" />
                        <FamiliaMembro nome="Maria" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={10} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com parâmetro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do aluno"
                        aluno="Junior"
                        nota={8.5} />
                </Card>

                <Card titulo="#01 - Primeiro" color="#588C73">
                    <Primeiro />
                </Card>
            </div>

        </div>
    )
}
