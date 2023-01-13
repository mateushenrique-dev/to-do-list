import { Header } from './components/Header';
import { NewTaskFied } from './components/NewTaskField';
import styles from "./app.module.css";

import "./global.css";
import { NewTaskList, Task } from './components/NewTaskList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero laboriosam quam sequi accusamus ab, consequatur sed itaque ullam repellendus illo, officiis nostrum debitis voluptatum eveniet eligendi esse? Eum, assumenda?',
    done: false
  },
    {
      id: 2,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio libero laboriosam quam sequi accusamus ab, consequatur sed itaque ullam repellendus illo, officiis nostrum debitis voluptatum eveniet eligendi esse? Eum, assumenda?',
      done: true
    }
  ]);

  function deleteTask(taskId: number) {
    setTasks((oldTasks) => {
      return oldTasks.filter((oldTask) => oldTask.id !== taskId)
    })
  }

  function doneTask(taskId: number) {
    setTasks((oldTasks) => {
      return oldTasks.map(oldTask => {
        if (oldTask.id === taskId) {
          return {...oldTask, done: !oldTask.done}
        } else {
          return oldTask
        }
      })
    })
  }

  function handleAddTask(task: Task) {
    setTasks((oldTasks) => [...oldTasks, task])
  }

  return (
    <div className="App">
      <Header />
      <div className={styles.newTask}>
        <NewTaskFied
          onAddTask={handleAddTask}
        />
        <NewTaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onDoneTask={doneTask}
        />
      </div>
    </div>
  )
}

export default App
