import styles from "./styles.module.css";
import Plus from "../../assets/plus.svg";
import { Task } from '../NewTaskList';
import { ChangeEvent, FormEvent, useState } from 'react';

interface NewTaskFieldProps {
  onAddTask: (task: Task) => void;
}

export function NewTaskFied({ onAddTask }: NewTaskFieldProps) {
  const [taskContent, setTaskContent] = useState('');

  const isTaskContentEmpty = taskContent === '';

  function handleTaskContentChanging(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value);
  }

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    onAddTask({
      id: Math.random() * 100,
      content: taskContent,
      done: false
    })
  }

  return (
    <form onSubmit={handleAddTask} className={styles.newTaskField}>
      <input required onChange={handleTaskContentChanging} type="text" placeholder='Adicione uma nova tarefa' />
      <button disabled={isTaskContentEmpty}>
        <img src={Plus} alt="Icone de criar" />
        Criar
      </button>
    </form>
  );
}