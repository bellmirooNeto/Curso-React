import { useState } from 'react'
import Button from '../components/Button'
import Display from '../components/Display'
import './Calculator.css'


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default function Calculator(props) {

    const [state, setState] = useState({ ...initialState })

    function clearMemory() {
        setState({ ...initialState })
    }

    const setOperation = (op) => {
        if (state.current === 0) {
            state.current = 1
            const values = [state.values[0]]
            const operation = op
            setState({ 
                operation: operation,
                clearDisplay: true,
                current: state.current,
                values, displayValue: values 
            })
            
        }
        else {
            const equals = state.operation === '='
            const currentOperation = op
    
            const values = [...state.values]
            if (currentOperation === '+') {
                values[0] = (values[0] + values[1])
                values[1] = 0
                setState({
                    displayValue: values[0],
                    operation: equals ? null : op,
                    current: equals ? 0 : 1,
                    clearDisplay: !equals,
                    values
                })
            } else if (currentOperation === '-'  ) {
                values[0] = (values[0] - values[1])
                values[1] = 0
                setState({
                    displayValue: values[0],
                    operation: equals ? null : op,
                    current: equals ? 0 : 1,
                    clearDisplay: !equals,
                    values
                })
            } else if (currentOperation === '*') {
                values[0] = (values[0] * values[1])
                values[1] = 0
                setState({
                    displayValue: values[0],
                    operation: equals ? null : op,
                    current: equals ? 0 : 1,
                    clearDisplay: !equals,
                    values
                });
            } else if (currentOperation === '/') {
                values[0] = (values[0] / values[1])
                values[1] = 0
                setState({
                    displayValue: values[0],
                    operation: equals ? null : op,
                    current: equals ? 0 : 1,
                    clearDisplay: !equals,
                    values
                });
            }
            else {
                console.log('Erro!')
            }
        }

    }

    const addDigit = (n) => {
        if (n === '.' && state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = state.displayValue === '0'
            || state.clearDisplay
        const currentValue = clearDisplay ? '' : state.displayValue
        const displayValue = currentValue + n
        setState({ displayValue, clearDisplay: false, operation: '', values: [], current: 0 })

        if (state.current === 0) {
            if (n !== '.' || n === '.') {
                const i = state.current
                const newValue = parseFloat(displayValue)
                const values = [...state.values]
                values[i] = newValue
                setState({ displayValue, clearDisplay: false, operation: '', values, current: 0 })

            }
        }
        else if (state.current === 1) {
            if (n !== '.' || n === '.') {
                const i = state.current
                const newValue = parseFloat(displayValue)
                const values = [...state.values]
                values[i] = newValue
                setState({ displayValue, clearDisplay: false, operation: '', values, current: 1 })

            }
        }
    }

    return (
        <div className="calculator">
            <Display value={state.displayValue} />
            <Button label="AC" click={clearMemory} triple />
            <Button label="/" click={setOperation} operation />
            <Button label="7" click={addDigit} />
            <Button label="8" click={addDigit} />
            <Button label="9" click={addDigit} />
            <Button label="*" click={setOperation} operation />
            <Button label="4" click={addDigit} />
            <Button label="5" click={addDigit} />
            <Button label="6" click={addDigit} />
            <Button label="-" click={setOperation} operation />
            <Button label="1" click={addDigit} />
            <Button label="2" click={addDigit} />
            <Button label="3" click={addDigit} />
            <Button label="+" click={setOperation} operation />
            <Button label="0" double click={addDigit} />
            <Button label="." click={addDigit} />
            <Button label="=" click={setOperation} operation />
        </div>
    )

}
