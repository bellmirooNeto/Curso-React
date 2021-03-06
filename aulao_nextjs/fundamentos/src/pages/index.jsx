import Navegador from "../components/Navegador";

export default function Inicio() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh'
      }}>
        <Navegador texto="Estiloso" destino="/estiloso" />
        <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3" />
        <Navegador texto="JSX" destino="/jsx" cor="crimson" />
        <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
        <Navegador texto="Navegação #02" destino="/cliente/PE/456" cor="blue" />
        <Navegador texto="Navegação Dinâmica" destino="/estado" cor="pink" />
        <Navegador texto="Integração" destino="/integracao" cor="brown" />
        <Navegador texto="Conteúdo estático" destino="/estatico" cor="gray" />
      </div>
    )
}