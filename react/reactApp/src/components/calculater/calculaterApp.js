import React from 'react';
import './index.css';


class autoSchinkingText extends React.Component{
    state ={
        scale : 1
    }
    componentDidUpdate(){
        const node = this.node

        const {offsetWidth} = this.node
        const parrentWidth = node.offsetParrent.offsetWidth

        const scale = offsetWidth / parrentWidth

        if (scale > 1){
            this.setState({
                scale : 1 / scale
            })
        } else if(this.state.scale !== 1) {
            this.setState({
                scale : 1
            })
        }
    }
    render(){
        const {scale} = this.state
        return(
             <div {...this.props} ref={node => this.node = node} style={{transform : `scale(${scale},${scale})`}}/>
        )
    }
}

class App extends React.Component{
    state = {
        value : null,
        displayValue : '0',
        waitingForOperand : false,
        operator : null
    }
// CLEAR DISPLAY ===================================
    clearDisplay(){
        this.setState({
            displayValue : '0'
        })
    }
// INSERT DIGIT ==================================
    inputDigit(digit){
        const {displayValue, waitingForOperand} = this.state

        if(waitingForOperand){
            this.setState({
                displayValue : String(digit),
                waitingForOperand : false
            })
        } else {
            this.setState({
                displayValue : displayValue === '0' ? String(digit) : displayValue + digit
            })

        }
    }
// INSERTING DOT ==============================
    inputDot(){
        const {displayValue, waitingForOperand} = this.state
        if(waitingForOperand){
            this.setState({
                displayValue : '.',
                waitingForOperand: false
            })
        }else if(displayValue.indexOf('.')===-1){
                this.setState({
                    displayValue: displayValue + '.',
                    waitingForOperand: false
                })
        }

    }
// INSERT OR REMOVE NEGATIV
    toggleSign(){
        const {displayValue} = this.state

        this.setState({
            displayValue : displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
        })
    }
// INSERT % ================================
    inputPercent(){
        const {displayValue} = this.state
        const value = parseFloat(displayValue)

        this.setState({
            displayValue : String(value / 100)
        })
    }
// INSERT OPERATION WITH DISPLAYVALUE ===================
    perfomOperation(nextOperator){
        const {displayValue, operator, value} = this.state

        const nextValue = parseFloat(displayValue)

        const operations = {
            '/' : (prevValue, nextValue) => prevValue / nextValue,
            '*' : (prevValue, nextValue) => prevValue * nextValue,
            '+' : (prevValue, nextValue) => prevValue + nextValue,
            '-' : (prevValue, nextValue) => prevValue - nextValue,
            '=' : (prevValue, nextValue) => nextValue
        }
        if (value == null){
            this.setState({
                value: nextValue
            })
        } else if(operator){
            const currentValue = value || 0
            const computedValue = operations[operator](currentValue, nextValue)

            this.setState({
                value : computedValue,
                displayValue : String(computedValue)
            })
        }

        this.setState({
            waitingForOperand : true,
            operator : nextOperator
        })
    }
    render(){
        const {displayValue} = this.state

        return(
            <div className="calculator">
                {/* <pre>{JSON.stringify(this.state,null,2)}</pre> */}
                <autoSchinkingText className ="calculator-display">{displayValue}</autoSchinkingText>
                {/* <div className ="calculator-display">{displayValue}</div> */}
                <div className="calculator-keypad">
                    <div className="input-keys">
                        <div className="function-keys">
                            <button className="calculator-key keyclear" onClick={ ()=> this.clearDisplay()}>AC</button>
                            <button className="calculator-key key-sign" onClick={ ()=> this.toggleSign()}>¤</button>
                            <button className="calculator-key key-percent" onClick={ ()=> this.inputPercent()}>%</button>
                        </div>
                        <div className="digit-keys">
                            <button className="calculator-key key-9" onClick={()=> this.inputDigit(9)}>9</button>
                            <button className="calculator-key key-8" onClick={()=> this.inputDigit(8)}>8</button>
                            <button className="calculator-key key-7" onClick={()=> this.inputDigit(7)}>7</button>
                            <button className="calculator-key key-6" onClick={()=> this.inputDigit(6)}>6</button>
                            <button className="calculator-key key-5" onClick={()=> this.inputDigit(5)}>5</button>
                            <button className="calculator-key key-4" onClick={()=> this.inputDigit(4)}>4</button>
                            <button className="calculator-key key-3" onClick={()=> this.inputDigit(3)}>3</button>
                            <button className="calculator-key key-2" onClick={()=> this.inputDigit(2)}>2</button>
                            <button className="calculator-key key-1" onClick={()=> this.inputDigit(1)}>1</button>
                            <button className="calculator-key key-0" onClick={()=> this.inputDigit(0)}>0</button>
                            <button className="calculator-key key-dot" onClick={()=> this.inputDigit('.')}>.</button>
                        </div>
                    </div>
                    <div className="operatir-keys">
                        <button className="calculator-key key-divide" onClick={()=> this.perfomOperation('/')}>/</button>
                        <button className="calculator-key key-multiply" onClick={()=> this.perfomOperation('*')}>x</button>
                        <button className="calculator-key key-subtract" onClick={()=> this.perfomOperation('-')}>-</button>
                        <button className="calculator-key key-add" onClick={()=>this.perfomOperation('+')}>+</button>
                        <button className="calculator-key key-equals" onClick={()=> this.perfomOperation('=')}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App