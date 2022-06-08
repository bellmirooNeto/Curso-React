import { useState } from "react";
import './Mega.css'

export default function Mega(props) {
    

    function gerarNumerosNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ?
            gerarNumerosNaoContido(min, max, array) :
            aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumerosNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        

        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosInciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosInciais)
    
    return (
        <div className="Mega">
            <h2>Mega sena</h2>
            <h3>{ numeros.map( (number) => <span className="teste">{ number }</span>)}</h3>
            <label>Gerar quantos números?</label>
            <input type="number" min="6" max="12" value={qtde} onChange={e => setQtde(+e.target.value)} />
            <div>
                <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar</button>
            </div>
        </div>
    )
}