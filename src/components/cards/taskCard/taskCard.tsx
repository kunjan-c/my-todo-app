import styles from "./taskCard.module.css";
import deletIcon from "../../../assets/png/bin.png";
import editIcon from "../../../assets/png/pen.png";
import checkedIcon from "../../../assets/png/checked.png";
const TaskCard = () => {
  return (
    <div className={styles["main-card"]}>
      <div className={styles["task-ttle-main-container"]}>
        <div className={styles["task-title-container"]}>
          <div className={styles["bullet"]}></div>
          <div className={styles["task-title"]}> Main TItle</div>
        </div>
        <div className= {styles['task-crud-icon-continer']}>
          <div>
            <img className={styles['crud-icons']}src={checkedIcon}></img>
          </div>
          <div>
            <img className={styles['crud-icons']} src={editIcon}></img>
          </div>
          <div>
            <img className={styles['crud-icons']} src={deletIcon}></img>
          </div>
        </div>
      </div>
      <div className={styles["task-desc"]}>
        today i am going to buy vegitable ,fruits,lipstic,pocket bla bla bla bla
        bla bla
      </div>
    </div>
  );
};

export default TaskCard;
