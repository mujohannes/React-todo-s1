import {useState} from 'react'

import './App.css';
// list component
function List( props ) {
  const items = props.tasks.map( (item) => {
    return <li>{item}</li>
  } )

  return(
    <ul className="list">
      {items}
    </ul>
  )
}

function App() {
  // state to store tasks
  const [tasks,setTasks] = useState( new Array() )

  const SubmitHandler = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const task = data.get('input')
    setTasks( tasks.concat(task) )
  }

  return (
    <div className="App">
      <header>
        <form onSubmit={SubmitHandler} >
          <input type="text" name="input" placeholder="add a task" />
          <button type="submit">Add</button>
        </form>
        <List tasks={tasks} />
      </header>
    </div>
  );
}

export default App;
