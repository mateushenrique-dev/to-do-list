import { Trash } from 'phosphor-react';
import { Task } from '../NewTaskList';
import styles from "./style.module.css";

interface TaskProps extends Task {
  onDeleteTask: (taskId: number) => void;
  onDoneTask: (taskId: number) => void;
}

export function TaskItem({ content, done, id, onDeleteTask, onDoneTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleDoneTask() {
    onDoneTask(id);
  }

  return (
    <div className={`${styles.taskListItem} ${done ? styles.taskListDone : ''}`}>
      <button onClick={handleDoneTask} className={styles.taskListCheck}></button>
      <p className={styles.taskListText}>{content}</p>
      <button onClick={handleDeleteTask} className={styles.taskListDelete}><Trash size={20} /></button>
    </div>
  )
}