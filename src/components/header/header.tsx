
import menuICon from "../../assets/menu-icon.svg";
import styles from "./header.module.css";
import "../../index.scss";

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <div><img className={styles['header-logo']} src={menuICon}></img></div>
      <div className={styles['header-title']}>MY TODO</div>
    </div>
  )
}

export default Header