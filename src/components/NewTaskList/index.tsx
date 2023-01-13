import styles from "./styles.module.css";
import Clipboard from "../../assets/clipboard.svg";
import { TaskItem } from '../Task';

interface TasksProps {
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
  onDoneTask: (taskId: number) => void;
}

export interface Task {
  id: number;
  content: string;
  done: boolean;
}

export function NewTaskList({ tasks, onDeleteTask, onDoneTask }: TasksProps) {
  const tasksDoneQuantity = tasks.filter((task) => task.done === true).length;
  const taskQuantity = tasks.length;

  return (
    <div className={styles.newTaskList}>
      <header className={styles.newTaskListHeader}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{taskQuantity}</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>{tasksDoneQuantity} de {taskQuantity}</span>
        </div>
      </header>
      {taskQuantity === 0 ? (
        <div className={styles.newTaskListNoTask}>
          <img src={Clipboard} alt="" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
          <div className={styles.taskList}>
            {tasks.map((task) => (
              <TaskItem
                {...task}
                key={task.id}
                onDeleteTask={onDeleteTask}
                onDoneTask={onDoneTask}
              />
            ))}
          </div>
      )}
    </div>
  );
}