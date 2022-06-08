import { useState } from "react"

export default function Input(props) {
    const [valor, setValor] = useState('Inicio')

    function quandoMudar(e) {
        setValor(e.target.value)
    }
    return (
        <div>
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly />
                <input value={undefined} />
            </div>

        </div>
    )
}