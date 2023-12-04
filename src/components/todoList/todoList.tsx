import styles from "./todoList.module.css";
import createTaskICon from "../../assets/createTaskIcon.svg";
import TaskCard from "../cards/taskCard/taskCard";
const TodoList = () => {
  return (
    <div className={styles["content-container"]}>
      <TaskCard></TaskCard>
      <TaskCard></TaskCard>
      <TaskCard></TaskCard>
      <div className={styles["create-todo-icon-container"]}>
        <img className={styles["create-todo-icon"]} src={createTaskICon}></img>
      </div>
    </div>
  );
};

export default TodoList;
