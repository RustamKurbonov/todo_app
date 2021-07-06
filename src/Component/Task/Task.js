import React from 'react';
import UpdateInput from '../UpdateInput/UpdateInput';
import './Task.css'

const Task = props => {
    const Button = () => {
        return <div className='task__btn'>
            {!props.chek ? 
                <p onClick={props.doneTask}><i className="fa fa-check-circle-o" aria-hidden="true"></i></p> : 
                <p onClick={props.delTask}><i className="fa fa-times" aria-hidden="true"></i></p>
            }
        </div>
    }

    const doneStyle = props.chek ? 'task__item d-flex justify-content-between align-items-center done' : 'task__item d-flex justify-content-between align-items-center'
    
    return(
        <div className={doneStyle}>
            <div className='col-10 task__title-item'>{props.title}</div>
            <Button/>
            <UpdateInput id={props.id} updateTask={props.updateTask} textTask={props.title}/>
        </div>
    )
}

export default Task;