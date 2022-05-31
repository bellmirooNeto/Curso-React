
export default function Aleatorio(props) {
    const min1 = props.min
    const max1 = props.max

    const num = Math.floor(Math.random() * (max1 - min1) + min1);

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>O número aleatório foi { num }</p>
        </div>
    )
}