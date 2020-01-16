import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
/* eslint-disable no-unused-vars */
import calculate from '../logic/calculate';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            next: null,
            operation: null,
            total:null,
        }
    };
    handle(btname){
        const { next, operation, total } = calculate(this.state, btname)
        this.setState({
            operation,
            total,
            next,
        });
    }
    render(){
        let value = null;
        if(this.state.operation == null){
            value = this.state.total ? this.state.total : '0';
        }else{
            value = this.state.next ? this.state.next : this.state.total;
        }
        return (
            <div id="main-div">
         <Display value = { value } />
         <ButtonPanel onClick={btname =>this.handleClick(btname) } />
  </div>
)
    }
}

export default App;
