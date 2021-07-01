import React from 'react';
import Task from './Component/Task/Task';
import InputTask from './Component/InputTask/InputTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      tasks: [
        { id: 0, task: 'Купить хлеб', chek: false },
        { id: 1, task: 'Купить молоко', chek: false },
        { id: 2, task: 'Купить масло', chek: false }
      ]
    }
  }

  updateTask = (newTask, id) => {
    const index = this.state.tasks.map(task => (task.id)).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].task = newTask;
      return tasks
    })
    
  }

  addTask = newTask => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
          id: tasks.length === 0 ? 0 : tasks.length,
          task: newTask,
          chek: false  
        })
      return tasks
    })
  }

  doneTask = id => {
    const index = this.state.tasks.map(task => (task.id)).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].chek = true;
      return tasks
    })
  }

  delTask = id => {
    const index = this.state.tasks.map(task => (task.id)).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks
    })
  }

  render(){
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task =>(!task.chek));
    const doneTasks = tasks.filter(task =>(task.chek));
    
    return(
      <div className='App'>
        <div className='wrapper'>
          <div className='container'>
            <div className='task'>
              <div className='task__title'>
                Активные задачи: {activeTasks.length}
              </div>
              {[...activeTasks, ...doneTasks].map(task => (
                <Task
                  updateTask={this.updateTask}
                  doneTask={() => this.doneTask(task.id)}
                  delTask={() => this.delTask(task.id)}
                  chek={task.chek} 
                  title={task.task} 
                  key={task.id}
                  id={task.id}
                />
              ))}
              <InputTask addTask={this.addTask}/>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
