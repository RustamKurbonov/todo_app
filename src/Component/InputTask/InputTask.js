import React from 'react';
import './InputTask.css';

class InputTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    enterPress = e => {
        if(e.key === "Enter") {
            this.addTask();
        }
    }

    inputChenge = e => {
        this.setState( {input: e.target.value} );
    }

    addTask = () => {
        const { input } = this.state;
        if(input) {
            this.props.addTask(input);
            this.setState( {input: ''} );
        }
    }

    render(){
        const { input } = this.state;
        return(
            <div className='task__bottom d-flex'>
                <input className='col-8' onKeyPress={this.enterPress} onChange={this.inputChenge} value={input}></input>
                <button className='col-4' onClick={this.addTask}>Добавить задачу</button>
            </div>
        )
    }
}

export default InputTask;