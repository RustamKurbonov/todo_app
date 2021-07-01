import React from 'react';

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

  render(){
    const { tasks } = this.state;
    
    return(
      <div className='App'>
        <div className='wrapper'>
          <div className='container'>
            <div className='tack'>
              <div className='tack__title'>
                Активные задачи {tasks.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
