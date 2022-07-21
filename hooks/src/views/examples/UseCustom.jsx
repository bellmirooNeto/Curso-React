import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
      const [count, inc, dec] = useCounter(50)
      const url = 'http://files.cod3r.com.br/curso-react/estados.json'
      const response = useFetch(url)

      function showStates(states) {
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla} </li>)
      }
      // fetch('http://files.cod3r.com.br/curso-react/estados.json')
      //      .then(resp => resp.json())
      //      .then(json => console.log(json))

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercícios #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                    onClick={() => dec()}>-1</button>
                    <button className="btn"
                    onClick={() => inc()}>+1</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul>
                    {!response.loading ? showStates(response.data) : false}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
