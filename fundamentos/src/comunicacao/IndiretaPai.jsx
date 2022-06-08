import IndiretaFilho from './IndiretaFilho'
import { useState } from 'react'

export default function IndiretaPai(props) {

    const [nome, setNome ] = useState('?')
    const [idade, setIdade ] = useState(0)
    const [nerd, setNerd ] = useState(false)

    function FornecerDados(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <span>{nome} </span>
            <span> <strong>{idade}</strong> </span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'} </span>
            <IndiretaFilho quandoClicar={FornecerDados} />
        </div>
    )
}