import React from 'react';
import './UpdateInput.css';

class UpdateInput extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            input: '',
            classVisibility: ''
        }
    }

    pressEnter = e => {
        if(e.key === 'Enter') {
            this.updateTask();
        }
    }

    openInput = () => {
        const { classVisibility } = this.state;
        if(classVisibility === ''){
            this.setState( { classVisibility: 'visible' } );
        } else {
            this.setState( { classVisibility: '' } );
        }
    }

    updateTask = () => {
        const { input } = this.state;
        if(input){
            this.props.updateTask(input, this.props.id);
            this.setState( { input: '', classVisibility: '' } );
        }
    }

    inputChange = e => {
        this.setState( { input: e.target.value } )
    }

    render(){
        const { input } = this.state;
        return(
            <div className='task__update'>
                <div style={this.state.elementStyle} id='task__input' className={this.state.classVisibility}>
                    <input onKeyPress={this.pressEnter} className='col-8' onChange={this.inputChange} value={ input }/>
                    <button className='col-4' onClick={this.updateTask}>Изменить</button>
                </div>
                <div onClick={this.openInput} className='task__icon'>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

export default UpdateInput;