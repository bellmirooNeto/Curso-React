import React from 'react'
import { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    //foco
    user: null,
    number: 0

}

function reducer(state, action) {
    switch(action.type) {
        case 'add2':
            return {...state, number: state.number + 2 }
        case 'login':
            return {...state, user: { name: action.payload } }
        case 'mult7':
            return {...state, number: state.number * 7 }
        case 'div25':
            return {...state, number: state.number / 25 }
        case 'int':
            return {...state, number: parseInt(state.number)}
        case 'num':
            return {...state, number: state.number + action.payload}
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch ] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? (
                    <span className="text">{state.user.name}</span>
                    ) : ( 
                    <span className="text">Sem Usuário</span>
                )}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                    onClick={() => dispatch({type: 'add2'})}>+2</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'mult7'})}>*7</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'div25'})}>/25</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'int'})}>Inteiro</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'login', payload: 'Belmiro'})}>Login</button>
                    <button className="btn"
                    onClick={() => dispatch({type: 'num', payload: -9})}>subtrair 9</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
