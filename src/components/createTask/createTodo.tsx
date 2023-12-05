import { useNavigate } from "react-router-dom";
import styles from "./createTask.module.css";

const CreateTodo = () => {
  const navigate = useNavigate();
  const onCloseIconClickHandler = () => {
    navigate("/");
  };
  return (
    <div className={styles["create-todo-card"]}>
      <div className={styles["create-todo-main-container"]}>
        <div className={styles["close-icon"]} onClick={onCloseIconClickHandler}>
          &times;
        </div>
        <center>
          <h2>Create New TODO</h2>
        </center>
        <div className={styles["todo-title-input-container"]}>
          <div className={styles["todo-name-txt"]}>TODO NAME</div>
          <input className={styles["todo-input"]} type="text"></input>
        </div>
        <div className={styles["todo-desc-input-container"]}>
          <div className={styles["todo-desc-txt"]}>TODO DESCRIPTION</div>
          <textarea className={styles["todo-desc-input"]}></textarea>
        </div>
        <div className={styles["create-btn-container"]}>
          <button className={styles["create-btn"]}>Create Todo</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
